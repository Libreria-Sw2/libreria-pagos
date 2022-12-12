export interface PayChannelDTO {
  name: string;
  code: string;
  distinctive_image: string;
  position: number;
  endpoint: string;
  status: boolean;

  icon: string;
  // placeholder: string,
  // maxlenght: number,
  // title: string
}

export interface GetPayChannelByUserResponseDTO {
  pay_channels: PayChannelDTO[];
  cardinal_token: string;
}

export interface GetPayChannelRequestDTO {
  Username: string;
  OrderNumber: string;
  Amount: string;
  CurrencyCode: string;
  OrderChannel: string;
}
