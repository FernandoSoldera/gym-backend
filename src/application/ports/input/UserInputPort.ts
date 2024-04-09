import { UserOutputPostgres } from './../../../infrastructure/database/adapters/output/UserOutputPostgres';
import { User } from '../../../domain/entity/User';
import { UserRequest } from '../../../domain/requests/UserRequest';
import { sign } from 'jsonwebtoken';

export class UserInputPort {
  userOutputPostgres: UserOutputPostgres;
  constructor() {
    this.userOutputPostgres = new UserOutputPostgres();
  }

  async saveUser(userRequest: UserRequest): Promise<User> {
    const user = new User(0, userRequest.name, userRequest.email, userRequest.role, userRequest.sex, userRequest.birthday, userRequest.password);

    return await this.userOutputPostgres.saveUser(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userOutputPostgres.getAllUser();
  }

  async getUserById(id: number): Promise<User> {
    return await this.userOutputPostgres.getUserById(id);
  }

  async deleteUserById(id: number): Promise<void> {
    await this.userOutputPostgres.deleteUserById(id);
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const user = await this.userOutputPostgres.getUserByEmail(email);

      if(user.password === password) {
        const token = sign({userId: user.id, username: user.name, role: user.role}, 'privateKeyTest', {
          expiresIn: '1h'
        })
        return token;
      }
      
      return 'Authentication failed';
    } catch(error) {
      console.error(error)
      return 'Authentication failed';
    }
  }
}
