// import { AuthFailureError, InternalError } from '../../business/core/ApiError';
// import JWT, { JwtPayload } from '../../business/core/JWT';
// import { Tokens } from '../../types/app-request';

// // import User from '../database/models/User'; //INCLUIR USER AL TOKEN

// export const getAccessToken = (authorization: string) => {
//   if (!authorization) throw new AuthFailureError('Invalid Authorization');
//   if (!authorization.startsWith('Bearer '))
//     throw new AuthFailureError('Invalid Authorization');
//   return authorization.split(' ')[1];
// };

// export const validateTokenData = (payload: JwtPayload): boolean => {
//   console.log('Payload: -------', payload);

//   if (
//     !payload ||
//     !payload.iss ||
//     !payload.sub ||
//     !payload.aud ||
//     !payload.prm ||
//     payload.iss !== 'ticketeg.com' ||
//     payload.aud !== 'ticketeg.com'
//   )
//     throw new AuthFailureError('Invalid Access Token');
//   return true;
// };

// export const createTokens = async (
//   //   user: User, TODO: INCLUIR USER
//   accessTokenKey: string,
//   refreshTokenKey: string,
// ): Promise<Tokens> => {
//   const accessToken = await JWT.encode(
//     new JwtPayload(
//       'ticketeg.com',
//       'ticketeg.com',
//       //   user.id.toString(),
//       '1', //TODO REPLACE THIS 1 WITH AN USER ID
//       accessTokenKey,
//       30,
//     ),
//   );

//   if (!accessToken) throw new InternalError();

//   const refreshToken = await JWT.encode(
//     new JwtPayload(
//       'ticketeg.com',
//       'ticketeg.com',
//       // user.id.toString(),
//       'asdasd', //TODO replace with a valid user id like the one commented in the previous line
//       refreshTokenKey,
//       30,
//     ),
//   );

//   if (!refreshToken) throw new InternalError();

//   return <Tokens>{
//     accessToken: accessToken,
//     refreshToken: refreshToken,
//   };
// };
