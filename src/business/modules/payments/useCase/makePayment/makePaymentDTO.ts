export interface makePaymentRequestDTO {
  gloss: string;
  payOrderNumber: number;
  totalAmmount: string;
  payChanelCode: string;
  extraData: ExtraData[];
}

export interface makePaymentResponseDTO {
  data: any;
}

export interface ExtraData {
  key: number;
  value: string;
}




