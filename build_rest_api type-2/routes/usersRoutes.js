import express from "express";

import {
  createUsers,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

//GET Request
router.get("/", getUsers);

//POST Request
router.post("/", createUsers);

//GET Request with ID to find user details
router.get("/:id", getUser);

//DELETE Request with userID
router.delete("/:id", deleteUser);

//PATCH Request with userID
router.patch("/:id", updateUser);

export default router;
