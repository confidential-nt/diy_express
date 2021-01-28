import express from "express";
import routes from "../routes";
import {
  deletePost,
  editPost,
  postDetail,
  upload,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get(routes.postDetail, postDetail);
postRouter.get(routes.editPost, editPost);
postRouter.get(routes.upload, upload);
postRouter.get(routes.deletePost, deletePost);

export default postRouter;
