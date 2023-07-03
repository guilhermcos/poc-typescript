import { Response, Request } from "express";
import { CreateTask } from "../schemas/schemas";
import {
  createNewTaskService,
  deleteTaskService,
  getTasksService,
} from "../services/tasks.services";

export async function createNewTask(req: Request, res: Response) {
  const newTask: CreateTask = req.body;
  try {
    await createNewTaskService(newTask);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteTaskService(parseInt(id));
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getTasks(req: Request, res: Response) {
  try {
    const result = await getTasksService();
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
