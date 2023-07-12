import Hashids from 'hashids'
import bycrypt from 'bcryptjs'
import env from '../config/env'

const hashids = new Hashids(env.NODE_KEY, 10)

export const encodeId = (data: number | string): string => {
  try {
    const newData = parseInt(data as string)
    return hashids.encode([newData])
  } catch (err) {
    return ''
  }
}

export const decodeId = (data: string): number => {
  try {
    return (hashids.decode(data)[0] ?? -1) as number
  } catch (err) {
    return -1
  }
}

export const bycryptGenerate = (data: number | string): string => {
  try {
    const salt = bycrypt.genSaltSync(10)
    return bycrypt.hashSync(data.toString(), salt)
  } catch (err) {
    return ''
  }
}

export const bycryptCheck = (test: string, hash: string): boolean => {
  try {
    return bycrypt.compareSync(test, hash)
  } catch (err) {
    return false
  }
}
