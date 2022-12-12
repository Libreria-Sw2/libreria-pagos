import { UniqueEntityID } from '../../../domain/interfaces/UniqueEntityID';
import { Transaction } from '../../../domain/transaction';
import { ITransactionsRepo } from './ITransactionsRepo';

export class TransactionRepo implements ITransactionsRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  async getTransactionByPaymentIdAndPaymentChannel(
    paymentId: string,
    payChannelId: string,
  ): Promise<Transaction> {
    let trx = await this.models.Transaction.findOne({
      where: {
        qr_id: paymentId,
        pay_channel_id: payChannelId,
      },
    });
    return Transaction.create(
      {
        payment_id: trx.payment_id,
        pay_channel_id: trx.pay_channel_id,
        payment_data: trx.payment_data,
        qr_id: trx.qr_id,
        status: trx.status,
      },
      new UniqueEntityID(trx.id),
    );
  }
  async saveTransaction(transaction: Transaction): Promise<void> {
    let trx = this.models.Transaction.build({
      id: transaction.id.id.toValue(),
      payment_id: transaction.payment_id,
      pay_channel_id: transaction.pay_channel_id,
      payment_data: transaction.payment_data,
      qr_id: transaction.qr_id,
      status: transaction.status,
    });
    await trx.save();
  }
}
