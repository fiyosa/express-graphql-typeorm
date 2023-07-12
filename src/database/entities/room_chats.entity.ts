import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { room_joins } from './room_joins.entity'
import { users } from './users.entity'

type TYPE = 'POST' | 'CHAT'

@Entity()
export class room_chats extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string | number

  @Column({ type: 'bigint', nullable: true })
  user_id: string | number | null

  @Column({ type: 'enum', enum: ['POST', 'CHAT'], default: 'POST' })
  type: TYPE

  @Column({ type: 'varchar', nullable: true })
  last_message: string | null

  @Column({ type: 'bool', default: false })
  is_read: boolean

  @Column({ type: 'bool', default: false })
  revoked: boolean

  @Column({ type: 'timestamp', nullable: true })
  created_at: string | null

  @Column({ type: 'timestamp', nullable: true })
  updated_at: string | null

  // relations

  @ManyToOne(() => users, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: users

  @OneToMany(() => room_joins, (room_joins) => room_joins.room_chat)
  room_join: room_joins[]
}
