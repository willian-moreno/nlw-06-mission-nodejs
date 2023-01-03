import {
  Entity,
  Column,
  PrimaryColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Unique(['name'])
@Entity('tags')
export class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
