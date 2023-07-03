import Joi from "joi";

export type CreateTask = {
  task: string;
  person: string;
};

export const createTaskSchema = Joi.object<CreateTask>({
  task: Joi.string().required(),
  person: Joi.string().required(),
});

export type DeleteTask = {
  id: string;
};

export const deleteTaskSchema = Joi.object<DeleteTask>({
  id: Joi.string().regex(/^\d+$/).required(),
});
