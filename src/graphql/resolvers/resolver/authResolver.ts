import { authRepository, userRepository } from '../../../repositories'
import { userResource } from '../../../resources'
import { sendErrorGql, __ } from '../../../utils'

interface ILogin {
  args: {
    username: string
    password: string
  }
}

interface IRefreshToken {
  args: {
    refreshToken: string
  }
}

interface ICtx {
  token: string
}

export const Login = async (_: any, args: ILogin) => {
  const auth = await authRepository.login(args.args)

  if (!auth) return sendErrorGql(400, 'Username or password invalid')

  return auth
}

export const RefreshToken = async (_: any, args: IRefreshToken) => {
  const auth = await authRepository.refresh(args.args.refreshToken)

  return auth
}

export const Logout = async (_: any, __: any, ctx: ICtx) => {
  const auth = await authRepository.logout(ctx.token)

  return auth
}

export const User = async (token: string) => {
  const result = await authRepository.verify(token)

  if (!result) return null

  const user = await userRepository.show(result.user_id)

  if (!user) return sendErrorGql(400, __('credentials_failed')) ?? null

  return userResource.show(user)
}
