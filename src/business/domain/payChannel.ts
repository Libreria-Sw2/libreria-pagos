import { GenericId } from './genericId';
import { Entity } from './interfaces/Entity';
import { UniqueEntityID } from './interfaces/UniqueEntityID';


interface PayChannelProps {
  name: string;
  code: string;
  distinctive_image: string;
  position: number;
  endpoint: string;
  status: boolean;

  icon: string;
  placeholder: string;
  title: string;
  maxlenght: number;
  type_component: string;
  external_code: string;
}

export class PayChannel extends Entity<PayChannelProps> {
  public get id(): GenericId {
    return GenericId.create(this._id);
  }


  public get name(): string {
    return this.props.name;
  }

  public get code(): string {
    return this.props.code;
  }

  public get distinctive_image(): string {
    return this.props.distinctive_image;
  }
  public get position(): number {
    return this.props.position;
  }
  public get endpoint(): string {
    return this.props.endpoint;
  }
  public get status(): boolean {
    return this.props.status;
  }
  public get external_code(): string {
    return this.props.external_code;
  }
  public get icon(): string {
    return this.props.icon;
  }
  public get placeholder(): string {
    return this.props.placeholder;
  }
  public get title(): string {
    return this.props.title;
  }
  public get maxlenght(): number {
    return this.props.maxlenght;
  }
  public get type_component(): string {
    return this.props.type_component;
  }

  private constructor(props: PayChannelProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: PayChannelProps,
    id?: UniqueEntityID,
  ): PayChannel {
    const parameter: PayChannel = new PayChannel(props, id);

    return parameter;
  }
}
