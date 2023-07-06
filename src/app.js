import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./databases/mongo.js";
import dotenv from "dotenv";
import {
  getAllTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
} from "./controllers/project-controller.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

dotenv.config();
connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/todo", getAllTodos);
app.post("/api/todo", createTodo);
app.put("/api/todo/:id", toggleTodo);
app.delete("/api/deletecompleted", deleteCompletedTodos);
app.delete("/api/todo/:id", deleteTodo);

app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3001);
