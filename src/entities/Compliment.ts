import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Tag } from '@entities/Tag';
import { User } from '@entities/User';

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column({ name: 'user_sender_id' })
  userSenderId: string;

  @JoinColumn({ name: 'user_sender_id' })
  @ManyToOne(() => User)
  userSender: User;

  @Column({ name: 'user_receiver_id' })
  userReceiverId: string;

  @JoinColumn({ name: 'user_receiver_id' })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column({ name: 'tag_id' })
  tagId: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column({ length: 100 })
  message: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
