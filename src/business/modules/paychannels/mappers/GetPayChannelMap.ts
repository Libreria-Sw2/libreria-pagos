import { X_OK } from 'constants';
import { placeholder } from 'sequelize/types/lib/operators';
import { Mapper } from '../../../../infra/Mapper';

import { UniqueEntityID } from '../../../domain/interfaces/UniqueEntityID';
import { PayChannel } from '../../../domain/payChannel';

import { PayChannelDTO } from '../useCase/getPayChannel/getPayChannelDTOs';


export class GetPayChannelMap implements Mapper<PayChannel> {
  public static toDomain(raw: any): PayChannel {


    const domainResponse: PayChannel = PayChannel.create(
      {
        code: raw.code,
        distinctive_image: raw.distinctive_image,

        endpoint: raw.endpoint,
        name: raw.name,
        position: raw.position,
        status: raw.status,
        icon: raw.icon,
        placeholder: raw.placeholder,
        title: raw.title,
        maxlenght: raw.maxlenght,
        type_component: raw.type_component,
        external_code: raw.external_code,
      },
      new UniqueEntityID(raw.pay_channel_id),
    );
    return domainResponse;
  }

  public static toDTO(domain: PayChannel): PayChannelDTO {

    return {
      code: domain.code,

      distinctive_image: domain.distinctive_image,
      endpoint: domain.endpoint,
      name: domain.name,
      position: domain.position,
      status: domain.status,
      icon: domain.icon,
      external_code: domain.external_code,
      // placeholder: domain.placeholder,
      // title: domain.title,
      // maxlenght: domain.maxlenght
    };
  }
}
