const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tweeter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion db OK"))
  .catch((err) => console.log(err));
