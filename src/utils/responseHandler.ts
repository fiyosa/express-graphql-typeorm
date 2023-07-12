import { Response } from 'express'
import { GraphQLError } from 'graphql'
import env from '../config/env'

export const sendSuccess = (res: Response, message: any) => {
  res.status(200).json({
    success: true,
    message,
  })
}

export const sendData = (res: Response, data: any, message: any) => {
  res.status(200).json({
    success: true,
    data,
    message,
  })
}

export const sendDataExtra = (res: Response, data: any, message: any) => {
  res.status(200).json({
    success: true,
    data,
    extra: {
      total: data?.length,
    },
    message,
  })
}

export const sendError = (res: Response, status: number = 400, message: any) => {
  res.status(status).json({
    success: false,
    message,
  })
}

export const sendErrorGql = (status: number, message: string) => {
  throw new GraphQLError(message, {
    extensions: {
      http: { status: status },
    },
  })
}

export const sendCrashGql = (message: string) => {
  const msg = env.NODE_ENV === 'production' ? 'Something went wrong' : message
  throw new GraphQLError(msg, {
    extensions: {
      http: { status: 500 },
    },
  })
}
