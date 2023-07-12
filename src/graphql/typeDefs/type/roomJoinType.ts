export const RoomJoin = `#graphql
  type RoomJoin {
    id: String!
    room_chat_id: String!
    user: RoomJoinOfUser!
    created_at: String
    updated_at: String
  }

  type RoomJoinOfUser {
    id: String!
    username: String!
    email: String!
    image: String
  },

  input RoomJoinOfShow {
    room_chat_id: String!
  }
`
