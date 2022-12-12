import { User } from '../../../domain/users';

export interface IUserRepo {
  exists(username: string): Promise<boolean>;
  getUserByUserId(userId: string): Promise<User>;
  getUserByUserName(username: string): Promise<User>;
}
