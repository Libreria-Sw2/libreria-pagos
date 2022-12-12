import {
  ICardinalCruiseService,
  OrderDetailsPayload,
} from '../../../../../infra/services/interfaces/ICardinalCruise';
import { left, Result, right } from '../../../../core/Result';
import { UseCase } from '../../../../core/UseCase';
import { PayChannel } from '../../../../domain/payChannel';
import { IPayChannelService } from '../../channels/IPayChannel';
import createPayChannel from './CreatePayChannelService';
import {
  makePaymentRequestDTO,
  makePaymentResponseDTO,
} from './makePaymentDTO';
import { MakePaymentsErrors } from './makePaymentError';
import { MakePaymentResponse } from './makePaymentReponse';

export class MakePayment implements UseCase<any, Promise<MakePaymentResponse>> {
  private payChannelService: IPayChannelService;

  constructor() {}

  public async execute(
    request: makePaymentRequestDTO,
  ): Promise<MakePaymentResponse> {
    let response: any;

    this.payChannelService = createPayChannel(request);
    console.log('llegue aqui');
    try {
      response = await this.payChannelService.processPayment(request);
    } catch (err) {
      console.log(err.toString());
      if (err.message) {
        return left(new MakePaymentsErrors.PaymentNotProcessed(err.message));
      } else {
        return left(new MakePaymentsErrors.PaymentNotProcessed());
      }
    }

    return right(Result.ok<makePaymentResponseDTO>(response));
  }
}
