import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  task: {
    type: Schema.Types.String,
    required: true,
  },
  active: {
    type: Schema.Types.Boolean,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
});

const Todo = model("Todo", TodoSchema);

export default Todo;
