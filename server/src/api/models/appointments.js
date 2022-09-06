const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointments', {
    appointmentsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    doctorName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    appointmentDate: {
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
    },
    aptTime: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appointments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "appointmentsID" },
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
