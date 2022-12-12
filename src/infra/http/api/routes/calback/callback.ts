import { Router } from 'express';
import { MakeCallbackBnbController } from '../../../../../business/modules/payments/useCase/callbackBNB/makeCallbackBNBController';
import asyncHandler from '../../../../utils/asyncHandler';

let callbackRouter = Router();

callbackRouter.post(
  '/',
  asyncHandler(async (req, res, next) =>
    MakeCallbackBnbController.sendDataCallback(req, res),
  ),
);

export { callbackRouter };
