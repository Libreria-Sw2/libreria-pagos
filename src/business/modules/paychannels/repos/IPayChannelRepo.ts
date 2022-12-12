import { PayChannel } from '../../../domain/payChannel';

export interface IPayChannelRepo {
  getAll(): Promise<PayChannel[]>;
  getPayChannlesByUser(userName: string): Promise<PayChannel[]>;
  getPayChannelByCode(code: string): Promise<PayChannel>;

}
