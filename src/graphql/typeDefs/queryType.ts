import { Chat } from './type/chatType'
import { Hash } from './type/hashType'
import { RoomChat } from './type/roomChatType'
import { RoomJoin } from './type/roomJoinType'
import { User } from './type/userType'

export const Query = `#graphql
  type Query {
    HashOfId(args: IHashOfId): HashOfId!

    UserOfAll(args: IUserOfAll): [User!]!
    UserOfShow(args: IUserOfShow): User!
    UserOfAuth: User!

    RoomChatOfShow(args: IRoomChatOfShow): [RoomChat!]! 

    RoomJoinOfShow(args: RoomJoinOfShow): [RoomJoin!]!

    ChatOfShow(args: IChatOfShow): [Chat!]!
  }  

  ${Hash}
  ${User}
  ${RoomJoin}
  ${RoomChat}
  ${Chat}
`
