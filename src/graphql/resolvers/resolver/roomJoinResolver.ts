import { authResolver } from '.'
import { roomJoinRepository } from '../../../repositories'
import { roomJoinResource } from '../../../resources'

interface IRoomJoinOfShow {
  args: {
    room_chat_id: string
  }
}

interface ICtx {
  token: string
}

export const RoomJoinOfShow = async (_: any, args: IRoomJoinOfShow, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const room_chat_id = args.args.room_chat_id

  const room_joins = await roomJoinRepository.show(room_chat_id)

  return roomJoinResource.show(room_joins)
}
