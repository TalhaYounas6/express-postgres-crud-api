import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import validateInput from "../middlewares/inputValidater.js";

const router = express.Router();

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", validateInput, createUser);
router.put("/user/:id", validateInput, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
