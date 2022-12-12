import models from '../../../../infra/database/sequelize/models';
import { TransactionRepo } from './SequelizeTransactionsRepo';

const transactionRepo = new TransactionRepo(models);

export { transactionRepo };
