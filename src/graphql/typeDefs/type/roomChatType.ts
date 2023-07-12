export const RoomChat = `#graphql
  type RoomChat {
    id: String!
    user_id: String!
    last_message: String!
    is_read: Boolean!
    revoked: Boolean!
    room_join: [RoomChatOfRoomJoin!]!
    created_at: String
    updated_at: String
  }

  type RoomChatOfRoomJoin {
    id: String!
    name: String!
    username: String!
    image: String!
  }

  input IRoomChatOfShow {
    user_id: String
    type: IRoomChatOfType
  }

  enum IRoomChatOfType {
    chat
    post
  }
`
