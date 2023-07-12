import db from '../../config/db'
import { chats } from '../../database/entities/chats.entity'
import { room_chats } from '../../database/entities/room_chats.entity'
import { date, decodeId } from '../../utils'

interface IProps {
  room_chat_id: string
  user_id: string
  message: string
}

export const store = async (props: IProps) => {
  const room_chat_id = decodeId(props.room_chat_id)
  const user_id = decodeId(props.user_id)
  const message = props.message
  const date_now = date.now()

  try {
    const chat = await db.manager.transaction(async (tx) => {
      const resChat = await tx.getRepository(chats).insert({
        room_chat_id: room_chat_id,
        user_id: user_id,
        message: message,
        created_at: date_now,
        updated_at: date_now,
      })

      await tx.getRepository(room_chats).update(
        { id: room_chat_id },
        {
          user_id: user_id,
          last_message: message,
          updated_at: date_now,
        }
      )

      const chat = await tx.getRepository(chats).findOne({ where: { id: resChat.raw[0].id } })

      return chat
    })

    return chat
  } catch (err) {
    return err?.message as string
  }
}
