const mongoose = require("mongoose");

const url = process.env.MONGODB_URL; // i can't share my mongodb url so i had stored it in heroku secrets but
// for local i ll use config / dev env variable which will be ignored when in deployment. 

mongoose
  .connect(url)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log("Something went Wrong in Db connection"));