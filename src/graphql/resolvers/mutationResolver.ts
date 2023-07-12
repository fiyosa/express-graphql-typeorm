import { authResolver, chatResolver } from './resolver'

export const Mutation = {
  Login: authResolver.Login,
  RefreshToken: authResolver.RefreshToken,
  Logout: authResolver.Logout,

  ChatOfStore: chatResolver.ChatOfStore,
  ChatOfDestroy: chatResolver.ChatOfDestroy,
}
