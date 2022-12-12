import { Request, Response } from 'express';
import { BaseController } from '../../../../../infra/http/api/models/BaseController';
import {
  FailureMsgResponse,
  SuccessMsgResponse,
  SuccessResponse,
} from '../../../../core/ApiResponse';
import { MakePayment } from './makePayment';
import {
  makePaymentRequestDTO,
  makePaymentResponseDTO,
} from './makePaymentDTO';

export class MakePaymentController extends BaseController {
  private useCase: MakePayment;
  constructor(useCase: MakePayment) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: Request, res: Response): Promise<any> {
    try {
      console.log('makePaymentController executeImpl :>> ', req.body);
      let dto: makePaymentRequestDTO = {
        extraData: req.body.extraData,
        gloss: req.body.gloss,
        payChanelCode: req.body.payChanelCode,
        payOrderNumber: req.body.payOrderNumber,
        totalAmmount: req.body.totalAmmount,
      };
      console.log('dto :>> ', dto);
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;
        return new FailureMsgResponse(error.errorValue().message).send(res);
      } else {
        return new SuccessResponse<makePaymentResponseDTO>(
          'Transaccion realizada:',
          result.value.getValue().data,
        ).send(res);
      }
    } catch (err) {
      return new FailureMsgResponse(err.toString()).send(res);
    }
  }
}
