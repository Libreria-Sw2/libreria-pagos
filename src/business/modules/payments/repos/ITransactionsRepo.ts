import { Transaction } from '../../../domain/transaction';

export interface ITransactionsRepo {
  getTransactionByPaymentIdAndPaymentChannel(
    paymentId: string,
    payChannelId: string,
  ): Promise<Transaction>;

  saveTransaction(transaction: Transaction): void;
}
