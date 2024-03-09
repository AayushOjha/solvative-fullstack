import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import { DatabaseConnectionString } from "./utils/constants";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

// Routes
app.use("/api/v1", router);

mongoose
  .connect(DatabaseConnectionString)
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server listening on 4000`);
    });
  })
  .catch((err) => console.error(err));
