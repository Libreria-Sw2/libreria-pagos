import { rejects } from 'assert';
import { payChannelRepo } from '../../../paychannels/repos';
import { BnbQrChannel } from '../../channels/BnbQrChannel';
import { IPayChannelService } from '../../channels/IPayChannel';

import { transactionRepo } from '../../repos';
import { makePaymentRequestDTO } from './makePaymentDTO';

function createPayChannel(request: {
  payChanelCode: string;
}): IPayChannelService {
  let paychannelToProcess: IPayChannelService;
  console.log(request.payChanelCode);
  switch (request.payChanelCode) {

    case 'bnb_qr':
      paychannelToProcess = new BnbQrChannel(transactionRepo, payChannelRepo);
      break;

    default:
      throw new Error("");
      break;
  }
  return paychannelToProcess;
}

export default createPayChannel;
