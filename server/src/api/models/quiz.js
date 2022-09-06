const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiz', {
    quizID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quizDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'userID'
      }
    }
  }, {
    sequelize,
    tableName: 'quiz',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quizID" },
        ]
      },
      {
        name: "userID_idx",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
};
