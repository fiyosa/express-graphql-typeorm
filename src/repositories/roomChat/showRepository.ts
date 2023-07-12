import { In } from 'typeorm'
import db from '../../config/db'
import { room_chats } from '../../database/entities/room_chats.entity'
import { room_joins } from '../../database/entities/room_joins.entity'
import { decodeId } from '../../utils'

interface IProps {
  user_id: string
  type: 'chat' | 'post'
}

export const show = async (props: IProps) => {
  try {
    const rooms = await db.manager.getRepository(room_joins).find({
      where: {
        user: {
          id: decodeId(props.user_id).toString(),
        },
      },
      relations: {
        room_chat: true,
      },
    })

    const room_chat_id = rooms.map((room) => room.room_chat.id)

    const roomChats = await db.manager.getRepository(room_chats).find({
      where: { id: In(room_chat_id), type: props.type === 'chat' ? 'CHAT' : 'POST' },
      order: { updated_at: 'DESC' },
      relations: {
        room_join: {
          user: true,
        },
        user: true,
      },
    })

    return roomChats
  } catch (err) {
    return []
  }
}
