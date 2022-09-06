var DataTypes = require("sequelize").DataTypes;
var _appointments = require("./appointments");
var _journal = require("./journal");
var _quiz = require("./quiz");
var _user = require("./user");

function initModels(sequelize) {
  var appointments = _appointments(sequelize, DataTypes);
  var journal = _journal(sequelize, DataTypes);
  var quiz = _quiz(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  appointments.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(appointments, { as: "appointments", foreignKey: "userID"});
  journal.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(journal, { as: "journals", foreignKey: "userID"});
  quiz.belongsTo(user, { as: "user", foreignKey: "userID"});
  user.hasMany(quiz, { as: "quizzes", foreignKey: "userID"});

  return {
    appointments,
    journal,
    quiz,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
