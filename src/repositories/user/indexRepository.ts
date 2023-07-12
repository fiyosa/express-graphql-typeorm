import { ILike } from 'typeorm'
import db from '../../config/db'
import { users } from '../../database/entities/users.entity'

interface IProps {
  page: number
  limit: number
  keyword: string
}

export const index = async (props: IProps) => {
  try {
    const result = await db.manager.getRepository(users).find({
      skip: props.page < 1 ? 0 : (props.page - 1) * props.limit,
      take: props.limit,
      order: { id: 'ASC' },
      where: [
        //
        { email: ILike(`%${props.keyword}%`) },
        { username: ILike(`%${props.keyword}%`) },
        { name: ILike(`%${props.keyword}%`) },
      ],
      relations: {
        room_chats: true,
      },
    })

    return result
  } catch (err) {
    return []
  }
}
