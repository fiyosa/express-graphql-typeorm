export const Chat = `#graphql
  type Chat {
    id: String!
    user_id: String!
    message: String!
    is_viewed: Boolean!
    created_at: String
    updated_at: String
  }

  input IChatOfShow {
    room_chat_id: String!
  }

  type ChatOfStore {
    message: String!
  }

  input IChatOfStore {
    room_chat_id: String!
    user_id: String!
    message: String!
  }

  type ChatOfDestroy {
    message: String!
  }

  input IChatOfDestroy {
    chat_id: String!
  }
`
