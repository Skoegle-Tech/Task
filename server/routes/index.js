import express from "express";
import userRoutes from "./userRoute.js";
import taskRoutes from "./taskRoute.js";
// import announcementRoutes from "./Anoncements.js";
const router = express.Router();

router.use("/user", userRoutes);
router.use("/task", taskRoutes);
// router.use("/announcement", announcementRoutes);

export default router;
