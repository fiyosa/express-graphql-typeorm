import db from '../../config/db'
import { chats } from '../../database/entities/chats.entity'
import { decodeId } from '../../utils'

export const show = async (room_chat_id: string) => {
  try {
    const result = await db.manager.getRepository(chats).find({
      where: [{ room_chat_id: decodeId(room_chat_id), revoked: false }],
      order: { id: 'ASC' },
    })

    return result
  } catch (err) {
    return []
  }
}
