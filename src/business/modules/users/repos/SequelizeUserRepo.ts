import { User } from '../../../domain/users';
import { UserMap } from '../mappers/userMap';
import { IUserRepo } from './IUserRepo';

const { Op } = require('sequelize');

export class SequelizeUserRepo implements IUserRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  async exists(username: string): Promise<boolean> {
    const GatewayUserModel = this.models.GatewayUser;
    const GatewayUser = await GatewayUserModel.findOne({
      where: {
        username: username,
      },
    });
    return !!GatewayUser === true;
  }

  async getUserByUserName(username: string): Promise<User> {
    const GatewayUserModel = this.models.GatewayUser;
    const GatewayUser = await GatewayUserModel.findOne({
      where: {
        username: username,
      },
    });
    if (!!GatewayUser === false) throw new Error('User not found.');
    return UserMap.toDomain(GatewayUser);
  }

  async getUserByUserId(userId: string): Promise<User> {
    const GatewayUserModel = this.models.GatewayUser;
    const GatewayUser = await GatewayUserModel.findOne({
      // where: {
      //   gateway_user_id: userId,
      // },
    });
    if (!!GatewayUser === false) throw new Error('User not found.');
    return UserMap.toDomain(GatewayUser);
  }
}
