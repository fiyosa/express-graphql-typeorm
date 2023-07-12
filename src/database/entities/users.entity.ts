import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { auths } from './auths.entity'
import { chats } from './chats.entity'
import { room_chats } from './room_chats.entity'
import { room_joins } from './room_joins.entity'

type GENDER = 'MALE' | 'FEMALE' | 'OTHER'

@Entity()
export class users extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string | number

  @Column({ unique: true })
  email: string

  @Column({ unique: true })
  username: string

  @Column({ type: 'varchar', nullable: true })
  password: string | null

  @Column()
  name: string

  @Column({ type: 'varchar', nullable: true })
  bio: string | null

  @Column({ type: 'varchar', nullable: true })
  website: string | null

  @Column({
    type: 'enum',
    enum: ['MALE', 'FEMALE', 'OTHER'],
    default: 'OTHER',
  })
  gender: GENDER

  @Column({ type: 'varchar', nullable: true })
  image: string | null

  @Column({ type: 'text', nullable: true })
  image_base64: string | null

  @Column({ nullable: true, type: 'timestamp' })
  email_verified_at: string | null

  @Column({ type: 'varchar', nullable: true })
  remember_token: string | null

  @Column({ type: 'timestamp', nullable: true })
  created_at: string | null

  @Column({ type: 'timestamp', nullable: true })
  updated_at: string | null

  // relations

  @OneToMany(() => room_chats, (room_chats) => room_chats.user)
  room_chats: room_chats[]

  @OneToMany(() => room_joins, (room_joins) => room_joins.user)
  room_joins: room_joins[]

  @OneToMany(() => chats, (room_joins) => room_joins.user)
  chats: chats[]

  @OneToMany(() => auths, (auths) => auths.user)
  auths: auths[]
}
