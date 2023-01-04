import { v4 as uuid } from 'uuid';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Unique(['email'])
@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 150 })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column({ length: 255 })
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
