const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('journal', {
    journalID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    details: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    date: {
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
    tableName: 'journal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "journalID" },
        ]
      },
      {
        name: "userID_idx",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
      {
        name: "userID_j_idx",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
};
