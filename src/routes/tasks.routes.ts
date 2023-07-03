import { Router } from "express";
import { createNewTask, deleteTask, getTasks } from "../controllers/tasks.controllers";
import {
  validateSchemaBody,
  validateSchemaParams,
} from "../middlewares/validateSchema.middlewares";
import { createTaskSchema, deleteTaskSchema } from "../schemas/schemas";

const tasksRouter = Router();

tasksRouter.post("/tasks", validateSchemaBody(createTaskSchema), createNewTask);
tasksRouter.delete("/tasks/:id", validateSchemaParams(deleteTaskSchema), deleteTask);
tasksRouter.get("/tasks", getTasks);

export default tasksRouter;
