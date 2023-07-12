import { chats } from '../../database/entities/chats.entity'
import { date } from '../../utils'
import { encodeId } from '../../utils/hash'

export const show = (chats: chats[]) => {
  return chats.map((chat) => {
    return {
      id: encodeId(chat.id || -1),
      user_id: encodeId(chat.user_id || -1),
      message: chat.message,
      is_viewed: chat.is_viewed,
      created_at: date.formatDate(chat.created_at || ''),
      updated_at: date.formatDate(chat.updated_at || ''),
    }
  })
}
