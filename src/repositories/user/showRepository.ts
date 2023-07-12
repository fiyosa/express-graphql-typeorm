import db from '../../config/db'
import { users } from '../../database/entities/users.entity'
import { decodeId } from '../../utils'

export const show = async (user_id: string) => {
  try {
    const id = decodeId(user_id)

    const result = await db.manager.getRepository(users).findOne({
      where: { id },
      relations: {
        room_chats: true,
      },
    })

    return result
  } catch (err) {
    return null
  }
}
