
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "contact",
    {
      // Model attributes are defined here
      permanentAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      presentAddress: {
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
      tableName: "Contact",
    }
  );
};
