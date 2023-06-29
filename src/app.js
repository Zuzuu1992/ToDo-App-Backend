import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./databases/mongo.js";
import dotenv from "dotenv";
import { getAllProject } from "./controllers/project-controller.js";
dotenv.config();
connect();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works" });
});

app.get("/api", getAllProject);

app.listen(3000);
