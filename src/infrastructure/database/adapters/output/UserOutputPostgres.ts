import { User } from './../../../../domain/entity/User';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { UserDTO } from '../jpa/dto/UserDTO';
import { UserDtoToUser } from './converters/UserDtoToUser';

export class UserOutputPostgres {
  repository: Repository<UserDTO>;
  constructor() {
    this.repository = AppDataSource.getRepository(UserDTO);
  }

  async saveUser(user: User): Promise<User> {
    const userDto = await this.repository.save(this.toDto(user));
    return UserDtoToUser.convert(userDto);
  }

  async getAllUser(): Promise<User[]> {
    const userDto = await this.repository.find();
    return UserDtoToUser.convertAll(userDto);
  }

  async getUserById(id: number): Promise<User> {
    const userDto = await this.repository.findOneBy({id});
    if(userDto == null) {
      throw new Error("User not found");
    }
    return UserDtoToUser.convert(userDto);
  }

  async deleteUserById(id: number): Promise<void> {
    await this.repository.delete({id});
  }

  async getUserByEmail(email: string): Promise<User> {
    const userDto = await this.repository.findOneBy({email});
    if(userDto == null) {
      throw new Error("User not found");
    }
    return UserDtoToUser.convert(userDto);
  }

  private toDto(user: User): UserDTO {
    return new UserDTO(user.id, user.name, user.email, user.role, user.sex, user.birthday, user.password);
  }
}
