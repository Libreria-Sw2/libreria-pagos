import express from 'express';



import { paymentRouter } from './routes/payments/payment';
import { callbackRouter } from './routes/calback/callback';
import { transactionsRouter } from './routes/transactions/transactions';
// import { tigoPhysicalPointRouter } from './routes/tigoPyshicalPoint/tigoPhysicalPoint';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: 'This API is up and running 🎉' });
});



v1Router.use('/pay', paymentRouter);
v1Router.use('/callback', callbackRouter);
v1Router.use('/transactions', transactionsRouter);


export default v1Router;
