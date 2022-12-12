import models from '../../../../infra/database/sequelize/models';
import { PayChannelRepo } from './SequelizePayChannelRepo';

const payChannelRepo = new PayChannelRepo(models);

export { payChannelRepo };
