import jwt from 'jsonwebtoken'
import db from '../../config/db'
import env from '../../config/env'
import { auths } from '../../database/entities/auths.entity'
import { users } from '../../database/entities/users.entity'
import { date, sendCrashGql, sendErrorGql } from '../../utils'
import { bycryptCheck, encodeId } from '../../utils/hash'

interface IProps {
  username: string
  password: string
}

export const login = async (props: IProps) => {
  try {
    const result = await db.transaction(async (tx) => {
      const user = await tx.getRepository(users).findOne({
        where: [{ username: props.username }, { email: props.username }],
      })

      if (!user) return sendErrorGql(400, 'Username or password invalid')

      if (!bycryptCheck(props.password, user.password as string))
        return sendErrorGql(400, 'Username or password invalid') ?? null

      const dateNow = date.now()
      const dateAddDay = date.moment(date.now()).add(1, 'days').toISOString()

      const refreshToken = jwt.sign(
        {
          user_id: encodeId(user.id),
        },
        env.REFRESH_TOKEN_SECRETE,
        { expiresIn: '1d' } // 1 day
      )

      const result = await tx.getRepository(auths).insert({
        user_id: user.id,
        refresh_token: refreshToken,
        created_at: dateNow,
        updated_at: dateNow,
        expired_at: dateAddDay,
      })

      const auth = await tx.getRepository(auths).findOne({
        where: { id: result.raw[0]?.id },
      })

      if (!auth) return

      const accessToken = jwt.sign(
        {
          user_id: encodeId(user.id),
          auth_id: encodeId(auth.id),
        },
        env.ACCESS_TOKEN_SECRETE,
        { expiresIn: '1d' } // 1 day
      )

      return { accessToken, refreshToken }
    })

    return result
  } catch (err) {
    sendCrashGql(err?.message)
    return null
  }
}
