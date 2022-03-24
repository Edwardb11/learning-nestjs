import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';
import { User } from '../entities/user.entity';
import { UserDto } from './../dtos/crerate-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Profile) private profileRepo: Repository<Profile>,
  ) {}
  findAll() {
    return this.userRepo.find({
      relations: ['profile', 'profile.photo'],
    });
  }

  async create(body: UserDto) {
    const profile = new Profile();
    profile.name = body.name;
    profile.lastName = body.lastName;
    // Para guadar en la base de datos
    const newProfile = await this.profileRepo.save(profile);

    const user = new User();
    user.email = body.email;
    user.password = body.password;
    // Para relacionarlo
    user.profile = newProfile;
    // Para guadar en la base de datos

    return this.userRepo.save(user);
  }
}
