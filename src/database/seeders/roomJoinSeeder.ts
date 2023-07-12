import { QueryRunner } from 'typeorm'
import { room_joins } from '../entities/room_joins.entity'

const roomJoinSeeder = async (tx: QueryRunner) => {
  console.log('Create room join seeder')

  await tx.manager.insert(room_joins, [
    {
      id: 1,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 21,
      user_id: 2,
    },
    {
      id: 2,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 21,
      user_id: 3,
    },
    {
      id: 3,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 22,
      user_id: 2,
    },
    {
      id: 4,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 22,
      user_id: 4,
    },
    {
      id: 5,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 23,
      user_id: 2,
    },
    {
      id: 6,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 23,
      user_id: 5,
    },
    {
      id: 7,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 24,
      user_id: 2,
    },
    {
      id: 8,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 24,
      user_id: 6,
    },
    {
      id: 9,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 25,
      user_id: 3,
    },
    {
      id: 10,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 25,
      user_id: 4,
    },
    {
      id: 11,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 26,
      user_id: 3,
    },
    {
      id: 12,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 26,
      user_id: 5,
    },
    {
      id: 13,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 27,
      user_id: 3,
    },
    {
      id: 14,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 27,
      user_id: 6,
    },
    {
      id: 15,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 28,
      user_id: 4,
    },
    {
      id: 16,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 28,
      user_id: 5,
    },
    {
      id: 17,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 29,
      user_id: 4,
    },
    {
      id: 18,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 29,
      user_id: 6,
    },
    {
      id: 19,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 30,
      user_id: 5,
    },
    {
      id: 20,
      created_at: '2023-06-28 11:08:19',
      updated_at: '2023-06-28 11:08:19',
      room_chat_id: 30,
      user_id: 6,
    },
  ])
}

export default roomJoinSeeder
