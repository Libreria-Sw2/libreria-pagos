import { GenericId } from './genericId';
import * as bcrypt from 'bcrypt-nodejs';
import { Entity } from './interfaces/Entity';
import { UniqueEntityID } from './interfaces/UniqueEntityID';
import { JWTToken, RefreshToken } from './jwt';

interface UserProps {
  username: string;
  password: string;
  accessToken?: JWTToken;
  refreshToken?: RefreshToken;
}

export class User extends Entity<UserProps> {
  get userId(): GenericId {
    return GenericId.create(this._id);
  }

  get username(): string {
    return this.props.username;
  }

  get password(): string {
    return this.props.password;
  }

  get accessToken(): string {
    return this.props.accessToken;
  }

  get refreshToken(): RefreshToken {
    return this.props.refreshToken;
  }

  public isLoggedIn(): boolean {
    return !!this.props.accessToken && !!this.props.refreshToken;
  }

  public setAccessToken(token: JWTToken, refreshToken: RefreshToken): void {
    this.props.accessToken = token;
    this.props.refreshToken = refreshToken;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID): User {
    const user = new User(
      {
        ...props,
      },
      id,
    );

    return user;
  }

  public async comparePassword(plainTextPassword: string): Promise<boolean> {
    let hashed: string;
    hashed = this.props.password;
    return this.bcryptCompare(plainTextPassword, hashed);
  }

  private bcryptCompare(plainText: string, hashed: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainText, hashed, (err: any, compareResult: any) => {
        if (err) {
          return resolve(false);
        }

        return resolve(compareResult);
      });
    });
  }
}
