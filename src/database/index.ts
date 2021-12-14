import mongoose, { ConnectOptions } from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Connexion db ok !");
  })
  .catch((err) => {
    console.log(err);
  });
