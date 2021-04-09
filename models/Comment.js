import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
