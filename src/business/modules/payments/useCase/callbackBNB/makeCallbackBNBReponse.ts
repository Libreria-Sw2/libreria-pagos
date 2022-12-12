import { AppError } from '../../../../core/AppError';
import { Either, Result } from '../../../../core/Result';
import { makeCallbackResponseDTO } from './makeCallbackBNBDTO';
import { MakeCallbackBNBErrors } from './makeCallbackBNBError';

export type MakeCallbackBCPResponse = Either<
  MakeCallbackBNBErrors.CallbackNotProcessed | AppError.UnexpectedError,
  Result<makeCallbackResponseDTO>
>;
