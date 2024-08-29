import type { Request, Response } from "express";
import type { Todo } from "../models/todo";

const todos: Todo[] = [];

export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    ...req.body,
  };

  todos.push(newTodo);
  res.status(201).json;
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  Object.assign(todo, { title, completed });

  res.json(todo);
};

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === Number(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(todos.indexOf(todo), 1);

  res.sendStatus(204);
};
