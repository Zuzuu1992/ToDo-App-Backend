import Todo from "../models/Todo.js";
import { v4 as uuidv4 } from "uuid";

export const getAllTodos = async (req, res) => {
  const data = await Todo.find();

  return res.status(200).json(data);
};

//create new todo
export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      task: req.body.task,
      active: req.body.active,
      id: uuidv4(),
    });

    const savedTodo = await newTodo.save();
    return res.json(savedTodo);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create todo" });
  }
};

//toggle todo
export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ id: req.params.id });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.active = !todo.active;
    const updatedTodo = await todo.save();

    return res.json(updatedTodo);
  } catch (error) {
    return res.status(500).json({ error: "Failed to toggle todo" });
  }
};

//delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.deleteOne({ id });
    return res.json({ message: "Todo deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete todo" });
  }
};

//delete completed todos
export const deleteCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ active: false });

    return res.json({ message: "Completed todos deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete completed todos" });
  }
};
