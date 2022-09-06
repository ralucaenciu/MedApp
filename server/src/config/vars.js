const path = require('path');

// import .env variables
require('dotenv').config({
  allowEmptyValues:true,
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
 
};
