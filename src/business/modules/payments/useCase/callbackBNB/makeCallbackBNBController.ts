import { Request, Response } from 'express';
import { BaseController } from '../../../../../infra/http/api/models/BaseController';
import {
  FailureMsgResponse,
  SuccessMsgResponse,
  SuccessResponse,
} from '../../../../core/ApiResponse';
import { payChannelRepo } from '../../../paychannels/repos';
import { BnbQrChannel } from '../../channels/BnbQrChannel';
import { transactionRepo } from '../../repos';

import {
  makeCallbackRequestDTO,
  makeCallbackResponseDTO,
} from './makeCallbackBNBDTO';

export class MakeCallbackBnbController {

  static async sendDataCallback(req: Request, res: Response): Promise<any> {
    console.log('entro');
    try {
      let dto: makeCallbackRequestDTO = {
        qrId: req.body.qrId,
        payChanelCode: req.query.payChanelCode as string,
        extraData: JSON.stringify(req.query.extraData )
      }


      let bnb = new BnbQrChannel(transactionRepo, payChannelRepo);
      var result = await bnb.callbackReceive(dto);

        return new SuccessResponse<makeCallbackResponseDTO>(
          'Datos recibidos:',
          result,
        ).send(res);
    } catch (err) {
      return new FailureMsgResponse(err.toString()).send(res);
    }
  }
}
