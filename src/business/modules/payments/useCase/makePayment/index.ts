import { MakePayment } from './makePayment';
import { MakePaymentController } from './makePaymentController';

let makePayment = new MakePayment();
let makePaymentController = new MakePaymentController(makePayment);

export { makePaymentController };
