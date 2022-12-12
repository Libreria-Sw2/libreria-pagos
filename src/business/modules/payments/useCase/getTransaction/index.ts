import { payChannelRepo } from '../../../paychannels/repos';
import { transactionRepo } from '../../repos';
import { TransactionRepo } from '../../repos/SequelizeTransactionsRepo';
import { GetTransaction } from './getTransaction';
import { GetTransactionController } from './getTransactionController';

let getTransaction = new GetTransaction(transactionRepo, payChannelRepo);
let getTransactionController = new GetTransactionController(getTransaction);

export { getTransactionController };
