import { Result } from '../../../../core/Result';
import { UseCaseError } from '../../../../core/UseCaseError';

export namespace GetTransactionError {
  export class TransactionNotFound extends Result<UseCaseError> {
    constructor(message: string = 'No se encontro la transaccion') {
      super(false, {
        message: message,
      } as UseCaseError);
    }
  }
}
