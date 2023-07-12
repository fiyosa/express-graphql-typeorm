import { users } from '../../database/entities/users.entity'
import { date, encodeId } from '../../utils'

export const show = (user: users) => {
  const new_room_chats: any[] = []

  for (const room_chat of user.room_chats) {
    if (room_chat.type === 'CHAT') new_room_chats.push({ id: encodeId(room_chat.id) })
  }

  return {
    id: encodeId(user.id),
    email: user.email || '',
    username: user.username || '',
    name: user.name || '',
    bio: user.bio || '',
    website: user.website || '',
    gender: user.gender || '',
    image: user.image || '',
    image_base64: user.image_base64 || '',
    room_chats: new_room_chats,
    created_at: date.formatDate(user.created_at || ''),
    updated_at: date.formatDate(user.updated_at || ''),
  }
}
