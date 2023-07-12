import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { room_chats } from './room_chats.entity'
import { users } from './users.entity'

@Entity()
export class room_joins extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string | number

  @Column({ type: 'bigint', nullable: true })
  room_chat_id: string | number | null

  @Column({ type: 'bigint', nullable: true })
  user_id: string | number | null

  @Column({ type: 'timestamp', nullable: true })
  created_at: string | null

  @Column({ type: 'timestamp', nullable: true })
  updated_at: string | null

  // relations

  @ManyToOne(() => room_chats, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_chat_id' })
  room_chat: room_chats

  @ManyToOne(() => users, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: users
}
