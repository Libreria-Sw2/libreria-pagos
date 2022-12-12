import { BnbQr } from '../../../../infra/services/pay channel services/BnbQr/bnbqr';
import { Transaction } from '../../../domain/transaction';
import { IPayChannelRepo } from '../../paychannels/repos/IPayChannelRepo';
import { ITransactionsRepo } from '../repos/ITransactionsRepo';
import {
  makeCallbackRequestDTO,
  makeCallbackResponseDTO,
} from '../useCase/callbackBNB/makeCallbackBNBDTO';
import { makePaymentRequestDTO } from '../useCase/makePayment/makePaymentDTO';
import { IPayChannelService, PaymentResponse } from './IPayChannel';
import axios from 'axios';
import { SequelizeUserRepo } from '../../users/repos/SequelizeUserRepo';
import { TransactionRepo } from '../repos/SequelizeTransactionsRepo';
export class BnbQrChannel implements IPayChannelService {
  private repo: ITransactionsRepo;
  private payChannelRepo: IPayChannelRepo;

  constructor(repo: ITransactionsRepo, payChannelRepo: IPayChannelRepo) {
    this.repo = repo;
    this.payChannelRepo = payChannelRepo;
  }

  async processPayment(
    request: makePaymentRequestDTO,
  ): Promise<PaymentResponse> {
    console.log(request);

    var bnbQR = new BnbQr(
      request.gloss,
      parseFloat(request.totalAmmount),
      request.payOrderNumber + '',
    );
    let result = await bnbQR.getQRWithImage();
    //guardar QR
    let paychannel = await this.payChannelRepo.getPayChannelByCode('bnb_qr');
    let trx = Transaction.create({
      pay_channel_id: paychannel.id.id.toValue(),
      payment_data: '',
      payment_id: request.payOrderNumber + '',
      qr_id: result.id,
      status: 1,
    });
    await this.repo.saveTransaction(trx);
    return this.formatResponse(result, bnbQR.expirationDate);
  }

  async callbackReceive(request: makeCallbackRequestDTO): Promise<any> {
    let libraryURL = await process.env.CALLBACK_LIBRARY_URL;
    let paychannel = await this.payChannelRepo.getPayChannelByCode('bnb_qr');
    let transaction = await this.repo.getTransactionByPaymentIdAndPaymentChannel(
      request.IdQr, paychannel.id.id.toValue()
    )
    console.info(request);
    let response = await axios.post(
      libraryURL + '/confirmarSuscripcion',
      {
        subscriptionId: transaction.id.id.toValue(),
        status: "CONFIRMED",
      }
    );
    if (response.data.success) {
      return this.formatResponse(response.data.data, null);
    }
  }

  private formatResponse(o: any, date: any): PaymentResponse {
    return {
      data: {
        id: o.id,
        qr: o.qr,
        expirationDate: date,
      },
    };
  }
}
