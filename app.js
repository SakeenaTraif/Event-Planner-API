const db = require("./db/models");
const eventRoute = require("./routes/events");
const express = require("express");

const app = express();

//Middleware
app.use(express.json());
app.use("/events",eventRoute);

 //db.sequelize.sync();
 db.sequelize.sync({alter: true});
 //db.sequelize.sync({force: true});

 app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });