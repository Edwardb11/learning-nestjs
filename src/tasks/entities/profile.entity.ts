import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'last_name' })
  lastName: string;

  // Bidirecionalidad
  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
