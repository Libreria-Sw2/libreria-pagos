import { left, Result, right } from '../../../../core/Result';
import { UseCase } from '../../../../core/UseCase';
import { IPayChannelRepo } from '../../../paychannels/repos/IPayChannelRepo';
import { ITransactionsRepo } from '../../repos/ITransactionsRepo';
import {
  getTransactionRequestDTO,
  getTransactionResponseDTO,
} from './getTransactionDTO';
import { GetTransactionError } from './getTransactionError';
import { GetTransactionResponse } from './getTransactionResponse';

export class GetTransaction
  implements UseCase<any, Promise<GetTransactionResponse>> {
  private repo: ITransactionsRepo;
  private payChannelRepo: IPayChannelRepo;
  constructor(repo: ITransactionsRepo, payChannelRepo: IPayChannelRepo) {
    this.repo = repo;
    this.payChannelRepo = payChannelRepo;
  }

  async execute(
    request: getTransactionRequestDTO,
  ): Promise<GetTransactionResponse> {
    let response: any = {};
    try {
      let payChannel = await this.payChannelRepo.getPayChannelByCode(
        request.pay_channel_code,
      );
      let transaction = await this.repo.getTransactionByPaymentIdAndPaymentChannel(
        request.qr_id,
        payChannel.id.id.toValue(),
      );
      response.data = {
        status: transaction.status,
        qr_id: transaction.qr_id,
        id: transaction.id.id.toValue(),
        payment_id: transaction.payment_id,
        payment_data: transaction.payment_data,
      };
      return right(Result.ok<getTransactionResponseDTO>(response));
    } catch (err) {
      console.log(err.toString());
      if (err.message) {
        return left(new GetTransactionError.TransactionNotFound(err.message));
      } else {
        return left(new GetTransactionError.TransactionNotFound());
      }
    }
  }
}
