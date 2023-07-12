import { authResolver } from '.'
import { chatRepository } from '../../../repositories'
import { chatResource } from '../../../resources'
import { __ } from '../../../utils'

interface IChatOfShow {
  args: {
    room_chat_id: string
  }
}

interface IChatOfStore {
  args: {
    room_chat_id: string
    user_id: string
    message: string
  }
}

interface IChatOfDestroy {
  args: {
    chat_id: string
  }
}

interface ICtx {
  token: string
}

export const ChatOfShow = async (_: any, args: IChatOfShow, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const room_chat_id = args.args.room_chat_id

  const chats = await chatRepository.show(room_chat_id)

  return chatResource.show(chats)
}

export const ChatOfStore = async (_: any, args: IChatOfStore, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const room_chat_id = args.args.room_chat_id
  const user_id = args.args.user_id
  const message = args.args.message

  const chat = await chatRepository.store({ room_chat_id, user_id, message })

  if (typeof chat === 'string') return { message: chat }

  if (!chat) return { message: __('save_failed', { operator: __('chat') }) }

  return { message: __('saved_successfully', { operator: __('chat') }) }
}

export const ChatOfDestroy = async (_: any, args: IChatOfDestroy, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const chat_id = args.args.chat_id

  const result = await chatRepository.destroy(chat_id)

  if (typeof result === 'string') return { message: result }

  if (!result) return { message: __('delete_failed', { operator: __('chat') }) }

  return { message: __('deleted_successfully', { operator: __('chat') }) }
}
