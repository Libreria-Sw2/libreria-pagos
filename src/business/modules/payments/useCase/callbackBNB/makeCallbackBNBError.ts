import { Result } from '../../../../core/Result';
import { UseCaseError } from '../../../../core/UseCaseError';

export namespace MakeCallbackBNBErrors {
  export class CallbackNotProcessed extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `No se pudo procesar los datos.`,
      } as UseCaseError);
    }
  }
}
