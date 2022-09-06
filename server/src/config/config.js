const { Sequelize } = require("sequelize");
//---------------------------Schema name,username,password

//DB local
module.exports = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  null,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    // dialectOptions:{
    //             ssl:{
    //                 require:true,
    //                 rejectUnauthorized:false
    //             },
    //         },
    define: {
      timestamps: false,
    },
  }
);
