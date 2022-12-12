import { AppError } from '../../../../core/AppError';
import { Either, Result } from '../../../../core/Result';
import { makePaymentResponseDTO } from './makePaymentDTO';
import { MakePaymentsErrors } from './makePaymentError';

export type MakePaymentResponse = Either<
  MakePaymentsErrors.PaymentNotProcessed | AppError.UnexpectedError,
  Result<makePaymentResponseDTO>
>;
