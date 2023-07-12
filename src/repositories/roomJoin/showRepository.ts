import db from '../../config/db'
import { room_joins } from '../../database/entities/room_joins.entity'
import { decodeId } from '../../utils'

export const show = async (room_chat_id: string) => {
  try {
    const result = await db.manager.getRepository(room_joins).find({
      where: { room_chat_id: decodeId(room_chat_id) },
      relations: {
        user: true,
      },
    })

    return result
  } catch (err) {
    return []
  }
}
