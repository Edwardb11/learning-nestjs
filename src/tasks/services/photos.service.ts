import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';
import { Photo } from './../entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photoRepo: Repository<Photo>,
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}

  // Metodos
  async addPhoto(data: any) {
    // Encontrar perfil
    const profile = await this.profileRepo.findOne(data.profileId);
    // Instancia de la foto
    const newPhoto = new Photo();
    // Si no existe manejar un error
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    // Asignar atributos
    console.log(profile);
    newPhoto.profile = profile;
    newPhoto.url = data.url;
    return this.photoRepo.save(newPhoto);
  }
}
