// const express = require("express");
import express from "express";
// const targetRouter = require("./routes/target.js");
// const sourceRouter = require("./routes/source.js");
import sourceRouter from "./routes/source.js";
import targetRouter from "./routes/target.js";
import mongoose from "mongoose";
const app = express();

const port = "3000";
const MONGODB_URL =
  "mongodb+srv://knight1:Bno6tVf7pzNsbjtI@cluster0.ua8kjad.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// app.use("/target", targetRouter);
app.use("/source", sourceRouter);
// app.use("/temp", tempRouter);

app.get("/", (req, res) => {
  res.send("App is running");
});
// app.post('/target', function(requ, res)){
//   controller.C
// }

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(
        `Server Running on Port: http://localhost:${process.env.PORT}`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
