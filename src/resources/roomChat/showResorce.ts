import { room_chats } from '../../database/entities/room_chats.entity'
import { date, decodeId, encodeId } from '../../utils'

export const show = (rooms: room_chats[], user_id: string) => {
  return rooms.map((room) => {
    return {
      id: encodeId(room.id || -1),
      user_id: encodeId(room.user.id || -1),
      last_message: room.last_message,
      is_read: room.is_read,
      revoked: room.revoked,
      room_join: room.room_join
        .filter((roomJoin) => roomJoin.user_id != decodeId(user_id).toString())
        .map((roomJoin) => {
          return {
            id: encodeId(roomJoin.user.id || -1),
            name: roomJoin.user.name,
            username: roomJoin.user.username,
            image: roomJoin.user.image,
            // image_base64: roomJoin.user.image_base64,
          }
        }),
      // room_join: room.room_join,
      created_at: date.formatDate(room.created_at || ''),
      updated_at: date.formatDate(room.updated_at || ''),
    }
  })
}
