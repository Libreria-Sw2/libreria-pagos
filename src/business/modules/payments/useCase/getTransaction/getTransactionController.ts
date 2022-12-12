import { Request, Response } from 'express';
import { BaseController } from '../../../../../infra/http/api/models/BaseController';
import {
  FailureMsgResponse,
  SuccessMsgResponse,
  SuccessResponse,
} from '../../../../core/ApiResponse';
import { GetTransaction } from './getTransaction';
import {
  getTransactionRequestDTO,
  getTransactionResponseDTO,
} from './getTransactionDTO';

export class GetTransactionController extends BaseController {
  private useCase: GetTransaction;
  constructor(useCase: GetTransaction) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: Request, res: Response): Promise<any> {
    try {
      console.log('GetTransactionController executeImpl :>> ', req.body);
      let dto: getTransactionRequestDTO = {
        pay_channel_code: req.body.pay_channel_code,
        qr_id: req.body.qr_id,
      };
      console.log('dto :>> ', dto);
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;
        return new FailureMsgResponse(error.errorValue().message).send(res);
      } else {
        return new SuccessResponse<getTransactionResponseDTO>(
          'Transaccion realizada:',
          result.value.getValue().data,
        ).send(res);
      }
    } catch (err) {
      return new FailureMsgResponse(err.toString()).send(res);
    }
  }
}
