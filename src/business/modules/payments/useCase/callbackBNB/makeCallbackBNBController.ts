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
        CorrelationId: req.body.CorrelationId,
        Id: req.body.Id,
        ServiceCode: req.body.ServiceCode,
        BusinessCode: req.body.BusinessCode,
        IdQr: req.body.IdQr,
        Eif: req.body.Eif,
        Account: req.body.Account,
        Amount: req.body.Amount,
        phone: req.body.phone,
        Currency: req.body.Currency,
        Gloss: req.body.Gloss,
        ReceiverAccount: req.body.ReceiverAccount,
        ReceiverName: req.body.ReceiverName,
        ReceiverDocument: req.body.ReceiverDocument,
        ReceiverBank: req.body.ReceiverBank,
        ExpirationDate: req.body.ExpirationDate,
        ResponseCode: req.body.ResponseCode,
        Status: req.body.Status,
        Request: req.body.Request,
        RequestDate: req.body.RequestDate,
        Response: req.body.Response,
        ResponseDate: req.body.ResponseDate,
        ResponseAch: req.body.ResponseAch,
        ResponseAchDate: req.body.ResponseAchDate,
        State: req.body.State,
        Description: req.body.Description,
        GenerateType: req.body.GenerateType,
        Version: req.body.Version,
        OperationNumber: req.body.OperationNumber,
        Collectors: req.body.Collectors
      };


      let bnb = new BnbQrChannel(transactionRepo, payChannelRepo);
      var result = await bnb.callbackReceive(dto);

      if (result.isLeft()) {
        const error = result.value;
        return new FailureMsgResponse(error.errorValue().message).send(res);
      } else {
        return new SuccessResponse<makeCallbackResponseDTO>(
          'Datos recibidos:',
          result.value.getValue().data,
        ).send(res);
      }
    } catch (err) {
      return new FailureMsgResponse(err.toString()).send(res);
    }
  }
}
