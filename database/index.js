const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/twitter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion db ok !");
  })
  .catch((err) => {
    console.log(err);
  });
