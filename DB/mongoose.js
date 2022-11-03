const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

const myPromise = new Promise((res, rej) => {
  mongoose
    .connect(url)
    .then(()=>res('Db Connected'))
    .catch((e) => {rej(e)});
});


module.exports = myPromise