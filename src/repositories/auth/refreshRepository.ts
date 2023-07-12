import jwt from 'jsonwebtoken'
import db from '../../config/db'
import env from '../../config/env'
import { auths } from '../../database/entities/auths.entity'
import { encodeId, sendCrashGql, sendErrorGql, __ } from '../../utils'

export const refresh = async (refreshToken: string) => {
  try {
    const user = await db.manager.getRepository(auths).findOne({
      where: { refresh_token: refreshToken, revoked: false },
    })

    if (!user) return sendErrorGql(403, __('credentials_failed')) ?? null

    const accessToken = jwt.sign(
      {
        user_id: encodeId(user.id),
      },
      env.ACCESS_TOKEN_SECRETE,
      { expiresIn: '1d' } // 1 day
    )

    return accessToken as string
  } catch (err) {
    return sendCrashGql(err?.message) ?? null
  }
}
