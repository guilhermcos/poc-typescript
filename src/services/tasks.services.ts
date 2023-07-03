import { db } from "../config/database";
import { CreateTask } from "../schemas/schemas";

export async function createNewTaskService(newTask: CreateTask) {
  return await db.query(
    `
    INSERT INTO tasks (task, person) VALUES ($1, $2)
    `,
    [newTask.task, newTask.person]
  );
}

export async function deleteTaskService(id: number) {
  return await db.query(
    `
  DELETE FROM tasks t
  WHERE t.id = $1
  `,
    [id]
  );
}

export async function getTasksService() {
  return await db.query(`
  SELECT * FROM tasks
  `);
}
