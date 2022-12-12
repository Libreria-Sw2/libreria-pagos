import { makePaymentRequestDTO } from '../useCase/makePayment/makePaymentDTO';

export interface IPayChannelService {
  processPayment(request: makePaymentRequestDTO): Promise<PaymentResponse>;
}

export interface PaymentResponse {
  data: any;
}
