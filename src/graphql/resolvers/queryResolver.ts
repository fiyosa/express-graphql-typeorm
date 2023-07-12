import { chatResolver, hashResolver, roomChatResolver, roomJoinResolver, userResolver } from './resolver'

export const Query = {
  HashOfId: hashResolver.HashOfId,

  UserOfAll: userResolver.UserOfAll,
  UserOfShow: userResolver.UserOfShow,
  UserOfAuth: userResolver.UserOfAuth,

  RoomChatOfShow: roomChatResolver.RoomChatOfShow,

  RoomJoinOfShow: roomJoinResolver.RoomJoinOfShow,

  ChatOfShow: chatResolver.ChatOfShow,
}
