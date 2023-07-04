const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
    {
    //   timestamps
    createdAt: false,
    updatedAt: true,
  },
  {
    // Other model options go here
    tableName: "User",
  }
);
console.log(User === sequelize.models.User); // true

module.exports = User;
