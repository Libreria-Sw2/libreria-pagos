// import express from 'express';
// // import UserRepo from '../database/repository/UserRepo'; TODO: REEMPLAZAR CON UN REPOSITORIO DE USUARIO

// import { getAccessToken, validateTokenData } from '../utils/authUtils';
// import validator, { ValidationSource } from '../utils/validator';
// import schema from './schema';
// import asyncHandler from '../utils/asyncHandler';
// import { ProtectedRequest } from '../../types/app-request';
// import { TokenExpiredError } from 'jsonwebtoken';
// import { AccessTokenError } from '../../business/core/ApiError';
// import JWT from '../../business/core/JWT';

// const router = express.Router();

// export default router.use(
//   validator(schema.auth, ValidationSource.HEADER),
//   asyncHandler(async (req: ProtectedRequest, res, next) => {
//     req.accessToken = getAccessToken(
//       req.headers.authorization ? req.headers.authorization : '',
//     ); // Express headers are auto converted to lowercase

//     try {
//       const payload = await JWT.validate(req.accessToken);
//       validateTokenData(payload);
//       console.log(payload.sub);
//       //TODO hacer la validacion
//       //   const user = await UserRepo.findById(parseInt(payload.sub));
//       //   if (!user) throw new AuthFailureError('User not registered');
//       //   req.user = user;

//       //   const keystore = await KeystoreRepo.findforKey(req.user, payload.prm);
//       //   if (!keystore) throw new AuthFailureError('Invalid access token');
//       //   req.keystore = keystore;

//       return next();
//     } catch (e) {
//       if (e instanceof TokenExpiredError) throw new AccessTokenError(e.message);
//       throw e;
//     }
//   }),
// );
