import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

import { User } from './user.entity';
import { Photo } from './photo.entity';

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

  // Un perfil tiene mucha Foto. relacion de ono a mucho
  @OneToMany(() => Photo, (photo) => photo.profile)
  photo: Photo[];
}
