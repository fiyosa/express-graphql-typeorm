import db from '../../config/db'
import { chats } from '../../database/entities/chats.entity'
import { date, decodeId, __ } from '../../utils'

export const destroy = async (chat_id: string) => {
  try {
    const date_now = date.now()

    const result = await db.manager
      .getRepository(chats)
      .update({ id: decodeId(chat_id) }, { revoked: true, updated_at: date_now })

    if (result.affected === 0) return false

    return true
  } catch (err) {
    return false
  }
}
