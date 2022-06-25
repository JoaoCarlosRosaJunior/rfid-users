import { Router } from "express";

import { UsersRepository } from "../modules/Repositories/implementations/UsersRepository";
import { CreateUserController } from "../modules/useCases/createCategory/CreateUserController";

const usersRoutes = Router();

const createCategoryController = new CreateUserController();
usersRoutes.post("/", createCategoryController.handle);

export { usersRoutes };
