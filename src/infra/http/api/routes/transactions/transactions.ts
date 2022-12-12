import { Router } from 'express';

import { getTransactionController } from '../../../../../business/modules/payments/useCase/getTransaction';
import { makePaymentController } from '../../../../../business/modules/payments/useCase/makePayment';
import asyncHandler from '../../../../utils/asyncHandler';

let transactionsRouter = Router();

transactionsRouter.get(
  '/',

  asyncHandler(async (req, res, next) => {
    getTransactionController.execute(req, res);
  }),
);

export { transactionsRouter };
