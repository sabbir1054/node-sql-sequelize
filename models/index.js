const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("employeeDB", "root","", {
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
