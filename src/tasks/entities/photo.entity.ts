import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;

  // Relacion bidirecional
  // El perfil puede tener muchas fotos
  // Entidad debil ya que es la que tiene el mucho
  @ManyToOne(() => Profile, (profile) => profile.photo)
  // Nombre de la relacion en la tabla de la bd
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
