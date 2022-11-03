const express = require("express");

const myPromise = require("./DB/mongoose");

const port = process.env.PORT || 3000; // this will get port according to env

const userRouter = require("./Router/userRouter");

const app = express();

app.use(express.json()); // Middleware to handle json data

app.use(userRouter);

myPromise
  .then((msg) => {
    console.log(msg);
    app.listen(port, console.log("server is up in port", port));
  })
  .catch((e) => console.log("Something Wrong in DB", e));
