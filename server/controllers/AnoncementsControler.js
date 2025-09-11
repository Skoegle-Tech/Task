import asyncHandler from "express-async-handler";
import Announcement from "../models/AnoncementModel";

const createAnnouncement = asyncHandler(async (req, res) => {
  try {
    const { title, message ,user} = req.body;

    const announcement = await Announcement.create({
      title,
      message,
      user
    });

    res.status(201).json({
      status: true,
      announcement,
      message: "Announcement created successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
});


const getAnnouncements = asyncHandler(async (req, res) => {
    try {
      const announcements = await Announcement.find();
        res.status(200).json({ status: true, announcements });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
});


const deleteAnnouncement = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      await Announcement.findByIdAndDelete(id);
        res.status(200).json({ status: true, message: "Announcement deleted successfully." });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
});


const updateAnnouncement = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const { title, message } = req.body;
        const announcement = await Announcement
        .findById(id);
        announcement.title = title;
        announcement.message = message;
        await announcement.save();
        res.status(200).json({ status: true, announcement, message: "Announcement updated successfully." });
    } catch (error) {
        console.log(error);

        return res.status(400).json({ status: false, message: error.message });
    }
});

const getAnnouncementById = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
        const announcement = await Announcement
        .findById(id);
        res.status(200).json({ status: true, announcement });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
});


const createComment = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { user, text } = req.body;
    const announcement = await Announcement.findById(id);

    announcement.comments.push({ user, text });
    await announcement.save();
    res.status(201).json({
      status: true,
      announcement,
        message: "Comment added successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
    }
});

const updateComment = asyncHandler(async (req, res) => {
    try {
        const { id, commentId } = req.params;
        const { text } = req.body;
        const announcement = await Announcement.findById(id);
        const comment = announcement.comments.find(
            (c) => c._id.toString() === commentId
        );
        if (comment) {
            comment.text = text;
            await announcement.save();
            res.status(200).json({ status: true, announcement, message: "Comment updated successfully." });
        } else {
            res.status(404).json({ status: false, message: "Comment not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
});

const deleteComment = asyncHandler(async (req, res) => {
    try {
        const { id, commentId } = req.params;
        const announcement = await Announcement.findById(id);
        announcement.comments = announcement.comments.filter(
            (c) => c._id.toString() !== commentId
        );
        await announcement.save();
        res.status(200).json({ status: true, announcement, message: "Comment deleted successfully." });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
});

export {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncementById,
   createComment,
  updateComment,
  deleteComment
};