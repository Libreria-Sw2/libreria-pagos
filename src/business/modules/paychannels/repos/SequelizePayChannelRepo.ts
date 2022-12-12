import { PayChannel } from '../../../domain/payChannel';
import { GetPayChannelMap } from '../mappers/GetPayChannelMap';
import { IPayChannelRepo } from './IPayChannelRepo';
// import { userRepo } from '../../users/repos/index';

export class PayChannelRepo implements IPayChannelRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  async getPayChannelByCode(code: string): Promise<PayChannel> {
    try {
      const paychannel: any = await this.models.PayChannel.findOne({
        where: {
          code: code,
        },

      });
      return GetPayChannelMap.toDomain(paychannel);
    } catch (e) {
      console.log('e :>> ', e);
      throw new Error('Failed reading pay channel');
    }
  }

  async getAll(): Promise<PayChannel[]> {
    try {
      const paychannels: any[] = await this.models.PayChannel.findAll({
        order: [
          ['position', 'ASC'],

        ],

      });
      let response = paychannels.map(c => GetPayChannelMap.toDomain(c));
      console.log('response :>> ', response);
      return response;
    } catch (ex) {
      console.log('ex :>> ', ex);
      throw new Error('Failed reading pay channel');
    }
  }



  async getPayChannlesByUser(userName: string): Promise<PayChannel[]> {
    try {
      // let user = await userRepo.getUserByUserName(userName);
      // const userFound = !!user;

      // if (!userFound) {
      //   throw new Error('Usuario no encontrado.');
      // }

      const paychannels: any[] = await this.models.PayChannel.findAll({
        // where: {
        //   user_id: user.userId.id.toValue(),
        // },
        order: [
          ['position', 'ASC'],

        ],

      });
      return paychannels.map(c => GetPayChannelMap.toDomain(c));
    } catch {
      throw new Error('Failed reading pay channel');
    }
  }
}
