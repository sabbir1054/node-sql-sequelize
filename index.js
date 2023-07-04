const bodyParser = require("body-parser");
const express = require("express");
const { sequelize } = require("./models");


const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Server is running");
});

sequelize.sync({ force: true });
app.listen(3000, () => {
  console.log("`App listening port from : 3000");
});
