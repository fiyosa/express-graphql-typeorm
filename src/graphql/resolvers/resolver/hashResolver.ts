import { decodeId, encodeId } from '../../../utils'

interface IHashOfId {
  args: {
    encode: string
    decode: string
  }
}

export const HashOfId = async (_: any, args: IHashOfId) => {
  const encode = (args.args?.encode as string) || ''
  const decode = (args.args?.decode as string) || ''

  if (encode.length !== 0) {
    return {
      result: encodeId(encode),
    }
  }

  return {
    result: decodeId(decode),
  }
}
