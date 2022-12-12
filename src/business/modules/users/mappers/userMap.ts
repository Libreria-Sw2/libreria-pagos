import { Mapper } from '../../../../infra/Mapper';
import { UniqueEntityID } from '../../../domain/interfaces/UniqueEntityID';
import { User } from '../../../domain/users';
import { UserDTO } from '../dto/userDTO';

export class UserMap implements Mapper<User> {
  public static toDTO(user: User): UserDTO {
    return {
      username: user.username,
    };
  }

  public static toDomain(raw: any): User {
    const user = User.create(
      {
        password: raw.password,
        username: raw.username,
      },
      new UniqueEntityID(raw.gateway_user_id),
    );

    return user;
  }
}
