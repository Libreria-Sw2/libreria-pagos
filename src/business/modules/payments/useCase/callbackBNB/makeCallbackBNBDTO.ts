export interface makeCallbackRequestDTO {
  CorrelationId: string,
  Id: number;
  ServiceCode: string;
  BusinessCode: string;
  IdQr: string;
  Eif: null;
  Account: string;
  Amount: number;
  phone: string;
  Currency: string;
  Gloss: string;
  ReceiverAccount: string;
  ReceiverName: string;
  ReceiverDocument: string,
  ReceiverBank: string;
  ExpirationDate: null;
  ResponseCode: null;
  Status: string;
  Request: null;
  RequestDate: string;
  Response: null;
  ResponseDate: string;
  ResponseAch: string;
  ResponseAchDate: string;
  State: boolean;
  Description: string;
  GenerateType: number;
  Version: string;
  OperationNumber: string;
  Collectors: [];
}

export interface makeCallbackResponseDTO {
  data: any;
}
