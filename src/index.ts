// Initialize env vars
require('dotenv').config();
//Initialize infrastructure
import './infra/server/app';

//Initialize db
import './infra/database/sequelize';
