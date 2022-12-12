import { AppError } from '../../../../core/AppError';
import { Either, Result } from '../../../../core/Result';
import { getTransactionResponseDTO } from './getTransactionDTO';
import { GetTransactionError } from './getTransactionError';

export type GetTransactionResponse = Either<
  GetTransactionError.TransactionNotFound | AppError.UnexpectedError,
  Result<getTransactionResponseDTO>
>;
