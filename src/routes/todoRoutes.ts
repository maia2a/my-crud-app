import { Router } from "express";
import * as todoController from "../controller/todoController";

const router = Router();

router.get("/todos", todoController.getTodos);
router.get("/todos/:id", todoController.getTodos);
router.post("/todos", todoController.createTodo);
router.delete("/todos/:id", todoController.deleteTodo);
router.put("/todos/:id", todoController.updateTodo);


export default router;
