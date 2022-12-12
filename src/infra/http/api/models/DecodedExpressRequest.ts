import express from 'express';
import { JWTClaims } from '../../../../business/domain/jwt';

export interface DecodedExpressRequest extends express.Request {
  decoded: JWTClaims;
}
