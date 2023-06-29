import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const TodoSchema = new Schema({
  task: {
    type: Schema.Types.String,
    required: true,
  },
  active: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    default: uuidv4,
    required: true,
    unique: true,
  },
});

const Todo = model("project", TodoSchema);

export default Project;
