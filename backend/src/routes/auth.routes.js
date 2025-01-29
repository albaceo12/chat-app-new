import express from "express";
const router = express.Router();
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { checkAuth, protectRoute } from "../middleware/auth.middleware.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);
export default router;
