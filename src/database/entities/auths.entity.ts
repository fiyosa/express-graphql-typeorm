import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { users } from './users.entity'

@Entity()
export class auths extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string | number

  @Column({ type: 'bigint', nullable: true })
  user_id: string | number | null

  @Column({ type: 'varchar' })
  refresh_token: string | null

  @Column({ type: 'bool', default: false })
  revoked: boolean

  @Column({ type: 'timestamp', nullable: true })
  expired_at: string | null

  @Column({ type: 'timestamp', nullable: true })
  created_at: string | null

  @Column({ type: 'timestamp', nullable: true })
  updated_at: string | null

  // relations

  @ManyToOne(() => users, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: users
}
