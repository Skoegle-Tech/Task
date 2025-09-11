import express from "express";
import {
 createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncementById,
   createComment,
  updateComment,
  deleteComment

} from "../controllers/AnoncementsControler.js";
import { isAdminRoute, protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protectRoute, isAdminRoute, createAnnouncement);
router.get("/", protectRoute, getAnnouncements);
router.get("/:id", protectRoute, getAnnouncementById);
router.put("/update/:id", protectRoute, isAdminRoute, updateAnnouncement);
router.delete("/delete/:id", protectRoute, isAdminRoute, deleteAnnouncement);

export default router;
