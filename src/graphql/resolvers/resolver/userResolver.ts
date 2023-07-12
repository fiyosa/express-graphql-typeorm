import { authResolver } from '.'
import { userRepository } from '../../../repositories'
import { userResource } from '../../../resources'
import { sendErrorGql, __ } from '../../../utils'

interface IUserOfAll {
  args: {
    page?: number
    limit?: number
    keyword?: string
  }
}

interface IUserOfShow {
  args: { id: string }
}

interface IUserOfAuth {
  args: { token: string }
}

interface ICtx {
  token: string
}

export const UserOfAll = async (_: any, args: IUserOfAll, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const page = args.args?.page ?? 1
  const limit = args.args?.limit ?? 10
  const keyword = args.args?.keyword ?? ''

  const users = await userRepository.index({ page, limit, keyword })
  return userResource.index(users)
}

export const UserOfShow = async (_: any, args: IUserOfShow, ctx: ICtx) => {
  await authResolver.User(ctx.token)

  const user_id = args.args?.id ?? ''

  const user = await userRepository.show(user_id)

  if (!user) return sendErrorGql(400, __('not_found', { operator: __('user') }))

  return userResource.show(user)
}

export const UserOfAuth = async (_: any, ___: IUserOfAuth, ctx: ICtx) => {
  const user = await authResolver.User(ctx.token)

  return user
}
