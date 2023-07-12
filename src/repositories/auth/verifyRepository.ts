import jwt from 'jsonwebtoken'
import db from '../../config/db'
import env from '../../config/env'
import { auths } from '../../database/entities/auths.entity'
import { decodeId, sendErrorGql, __ } from '../../utils'

export interface IVerify {
  user_id: string
  auth_id: string
}

export const verify = async (token: string | null): Promise<IVerify | null> => {
  try {
    if (!token) return sendErrorGql(403, __('credentials_failed')) ?? null

    const decode = jwt.verify(token, env.ACCESS_TOKEN_SECRETE) as IVerify

    const auth = await db.manager.getRepository(auths).findOne({
      where: { id: decodeId(decode.auth_id), revoked: false },
    })

    if (!auth) return sendErrorGql(403, __('credentials_failed')) ?? null

    return decode as IVerify
  } catch (err) {
    return sendErrorGql(403, __('credentials_failed')) ?? null
  }
}
