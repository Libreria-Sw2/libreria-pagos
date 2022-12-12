export interface PayChannelDTO {
  name: string;
  code: string;
  distinctive_image: string;
  position: number;
  endpoint: string;
  status: boolean;

  icon: string;
  external_code: string;
  // placeholder: string,
  // maxlenght: number,
  // title: string
}


export interface GetPayChannelResponseDTO {
  pay_channels: PayChannelDTO[];
  cardinal_token: string;
}

export interface GetPayChannelRequestDTO {
  OrderNumber: string;
  Amount: string;
  CurrencyCode: string;
  OrderChannel: string;
}
