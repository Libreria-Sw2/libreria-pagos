export interface makeCallbackRequestDTO {
  qrId:string;
  payChanelCode:string;
  extraData:string;
}

export interface makeCallbackResponseDTO {
  data: any;
}
