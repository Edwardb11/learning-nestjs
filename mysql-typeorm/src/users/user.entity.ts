import { Posts } from './../posts/posts.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  CreateAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(() => Profile)
  // Iniciar relacion (este tendra la columna y se pone Join Colum)
  @JoinColumn()
  profile: Profile;

  // Usuario relacionado con POST al revez ahora de 1 a mucho 1 usuario puede tener muchos post
  @OneToMany(() => Posts, (post) => post.auhtor)
  posts: Posts[];
}
