import jwt from 'jsonwebtoken'
import db from '../../config/db'
import env from '../../config/env'
import { auths } from '../../database/entities/auths.entity'
import { decodeId, sendErrorGql, __ } from '../../utils'
import { IVerify } from './verifyRepository'

export const logout = async (token: string) => {
  try {
    const decode = jwt.verify(token, env.ACCESS_TOKEN_SECRETE) as IVerify

    const result = await db.manager.getRepository(auths).update(
      { id: decodeId(decode.auth_id), revoked: false },
      {
        revoked: true,
      }
    )

    if (result.affected === 0) return sendErrorGql(403, __('credentials_failed')) ?? null

    return {
      message: __('logout_successfully'),
    }
  } catch (err) {
    return sendErrorGql(403, __('credentials_failed')) ?? null
  }
}
