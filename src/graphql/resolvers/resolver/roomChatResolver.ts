import { authResolver } from '.'
import { roomChatRepository } from '../../../repositories'
import { roomChatResource } from '../../../resources'

interface IRoomChatOfShow {
  args: {
    user_id: string
    type: 'chat' | 'post'
  }
}

interface ICtx {
  token: string
}

export const RoomChatOfShow = async (_: any, args: IRoomChatOfShow, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const user_id = args.args.user_id
  const type = args.args.type

  const rooms = await roomChatRepository.show({ user_id, type })

  return roomChatResource.show(rooms, user_id)
}
