import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins (you can specify a specific origin, e.g., 'http://example.com')
  })
);

//cpnnecting to the database
const MONGO_URL = "mongodb://mongo:27017/nawy_db";
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch(console.error);
app.use("/", router);
//listening to the port
app.listen(8000, () => {
  console.log("server running on port 8000");
});
