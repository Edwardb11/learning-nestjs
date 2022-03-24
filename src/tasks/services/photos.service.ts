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

  async addPhoto(data: any) {
    const profile1 = await this.profileRepo.findOne(data.profileId);
    if (!profile1) {
      throw new NotFoundException('profile not found');
    }
    const newPhoto = new Photo();
    newPhoto.url = data.url;
    newPhoto.profile = profile1;
    return this.photoRepo.save(newPhoto);
  }
}
