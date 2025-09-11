import mangoose from "mongoose";

const announcementSchema = new mangoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
    comments: [
      {
        user: { type: String, required: false },
        text: { type: String, required: false },
        date: { type: Date, default: Date.now, required: false },
      },
    ],
    user: { type: String, required: true },
  },
  { timestamps: true }
);

const Announcement = mangoose.model("Announcement", announcementSchema);

export default Announcement;