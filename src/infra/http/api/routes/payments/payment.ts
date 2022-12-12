import { Router } from 'express';

import { makePaymentController } from '../../../../../business/modules/payments/useCase/makePayment';
import asyncHandler from '../../../../utils/asyncHandler';

let paymentRouter = Router();

paymentRouter.post(
  '/',
  asyncHandler(async (req, res, next) =>
    makePaymentController.execute(req, res),
  ),
);

export { paymentRouter };
