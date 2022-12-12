export interface ICardinalCruiseService {
  GetToken(orderDetails: OrderDetailsPayload): Promise<string>;
}
export interface OrderDetailsPayload {
  OrderNumber: string;
  Amount: string;
  CurrencyCode: string;
  OrderChannel: string;
}
