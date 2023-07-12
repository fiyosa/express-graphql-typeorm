import { Auth } from './type/authType'
import { Chat } from './type/chatType'

export const Mutation = `#graphql
  type Mutation {
    Login(args: ILogin): Login!
    RefreshToken(args: IRefreshToken): RefreshToken!
    Logout: Logout!

    ChatOfStore(args: IChatOfStore): ChatOfStore!
    ChatOfDestroy(args: IChatOfDestroy): ChatOfDestroy!
  }

  ${Auth}
  ${Chat}
`
