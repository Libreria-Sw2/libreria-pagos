import { Result } from '../../../../core/Result';
import { UseCaseError } from '../../../../core/UseCaseError';

export namespace MakePaymentsErrors {
  export class PaymentNotProcessed extends Result<UseCaseError> {
    constructor(message: string = 'No se pudo procesar el pago') {
      super(false, {
        message: `No se pudo procesar el pago.`,
      } as UseCaseError);
    }
  }
}
