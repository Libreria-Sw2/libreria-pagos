import axios from 'axios';
import { response } from 'express';
import https from 'https';
import { resolve } from 'path';
import { tokenToString } from 'typescript';
import { makeCallbackRequestDTO } from '../../../../business/modules/payments/useCase/callbackBNB/makeCallbackBNBDTO';

export class BnbQr {
  private BNB_API_PATH: string = process.env.BNB_API_PATH;
  private BNB_ACCOUNT_ID: string = process.env.BNB_ACCOUNT_ID;
  private BNB_AUTHORIZATION_ID: string = process.env.BNB_AUTHORIZATION_ID;
  private CODE_QR_DEFAULT: string = process.env.CODE_QR_DEFAULT;

  private currency: string = 'BOB';
  private gloss: string;
  private amount: number;
  private singleUse: boolean;
  public expirationDate: Date;
  private additionalData: string;

  constructor(gloss: string, amount: number, additionalData: string) {
    this.gloss = gloss;
    this.amount = amount;
    this.additionalData = additionalData;
    this.expirationDate = this.addDays(Date.now(), 1);
  }

  private async getToken(): Promise<string> {
    try {
      let response = await axios.post(
        this.BNB_API_PATH + '/ClientAuthentication.API/api/v1/auth/token',
        {
          accountId: this.BNB_ACCOUNT_ID,
          authorizationId: this.BNB_AUTHORIZATION_ID,
        },
      );
      if (response.data.success) {
        return response.data.message;
      }
      throw new Error('Error al obtener token de autenticacion');
    } catch (e) {
      console.log('error al obtener el token BNB ' + JSON.stringify(e));
      throw e;
    }
  }

  async getQRWithImage(): Promise<any> {
    try {
      let token = await this.getToken();
      let response = await axios.post(
        this.BNB_API_PATH + '/QRSimple.API/api/v1/main/getQRWithImageAsync',
        {
          currency: this.currency,
          gloss: this.gloss,
          amount: this.amount,
          singleUse: true,
          expirationDate: this.expirationDate,
          additionalData: this.additionalData,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      if (response.data.success) {
        return response.data;
      }
      throw new Error('Error al obtener QR de BNB: ' + response.data.message);
    } catch (e) {
      console.log('error al obtener el token BNB ' + JSON.stringify(e));
      throw e;
    }
  }

  private addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
