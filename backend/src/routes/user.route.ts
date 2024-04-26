import { Router } from "express";

import { register, login } from "../controller/user.controller";

const userRouter = Router();

// Register a new user
userRouter.post("/register", register);

// Login a user
userRouter.post("/login", login);

export default userRouter;
