import { GenericId } from './genericId';
import { Entity } from './interfaces/Entity';
import { UniqueEntityID } from './interfaces/UniqueEntityID';
import { PayChannel } from './payChannel';


interface PayChannelProps {
  payment_id: string;
  pay_channel_id: string;
  payment_data: string;
  qr_id: string;
  status: number;
}

export class Transaction extends Entity<PayChannelProps> {
  public get id(): GenericId {
    return GenericId.create(this._id);
  }
  public get payment_id(): string {
    return this.props.payment_id;
  }
  public get pay_channel_id(): string {
    return this.props.pay_channel_id;
  }
  public get payment_data(): string {
    return this.props.payment_data;
  }
  public get qr_id(): string {
    return this.props.qr_id;
  }

  public get status(): number {
    return this.props.status;
  }

  private constructor(props: PayChannelProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: PayChannelProps,
    id?: UniqueEntityID,
  ): Transaction {
    const parameter: Transaction = new Transaction(props, id);

    return parameter;
  }
}
