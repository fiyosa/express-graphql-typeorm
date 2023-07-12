import { room_joins } from '../../database/entities/room_joins.entity'
import { date } from '../../utils'
import { encodeId } from '../../utils/hash'

export const show = (rooms: room_joins[]) => {
  return rooms.map((room) => {
    return {
      id: encodeId(room.id || -1),
      room_chat_id: encodeId(room.room_chat_id || -1),
      user: {
        id: encodeId(room.user.id || -1),
        username: room.user.username,
        email: room.user.email,
        image: room.user.image,
      },
      created_at: date.formatDate(room.created_at ?? ''),
      updated_at: date.formatDate(room.updated_at ?? ''),
    }
  })
}
