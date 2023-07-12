export const User = `#graphql
  type User {
    id: String!
    email: String!
    username: String!
    name: String!
    bio: String
    website: String
    gender: UserOfGender!
    image: String
    image_base64: String
    room_chats: [UserOfRoomChat]!
    created_at: String
    updated_at: String
  }

  type UserOfRoomChat {
    id: String!
  }

  enum UserOfGender {
    MALE
    FEMALE
    OTHER
  }

  input IUserOfAll {
    page: Int
    limit: Int
    keyword: Int
  }

  input IUserOfShow {
    id: String!
  }
`
