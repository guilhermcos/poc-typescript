import { Router } from "express";
import tasksRouter from "./tasks.routes";

const router = Router();

router.use(tasksRouter);

export default router;