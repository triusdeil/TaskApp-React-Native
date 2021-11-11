import { Router } from "express";
import {
  getTaskCount,
  getTasks,
  getTask,
  saveTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks";
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Task endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: get all tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */

router.get("/tasks/count", getTaskCount);
/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: get a task by id
 *    tags: [Tasks]
 */
router.get("/task/:id", getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new task
 *    tags: [Tasks]
 */

router.post("/tasks", saveTask);
/**
 * @swagger
 * /tasks:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 */

router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: update a task by id
 *    tags: [Tasks]
 */

router.put("/task/:id", updateTask);

export default router;
