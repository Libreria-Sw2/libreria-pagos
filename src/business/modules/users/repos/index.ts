import models from '../../../../infra/database/sequelize/models';
import { SequelizeUserRepo } from './SequelizeUserRepo';

let userRepo = new SequelizeUserRepo(models);

export { userRepo };
