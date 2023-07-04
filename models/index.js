const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("employeeDB", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
// ok
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.contact = require("./Contact")(sequelize, DataTypes);
db.user = require("./User")(sequelize, DataTypes, Model);
db.sequelize.sync({ force: true });

module.exports = db;
