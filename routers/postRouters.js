import express from "express";
import routes from "../routes";
import {
  deletePost,
  getEditPost,
  postEditPost,
  postDetail,
  getUpload,
  postUpload,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get(routes.editPost(), getEditPost);
postRouter.post(routes.editPost(), postEditPost);

postRouter.get(routes.upload, getUpload);
postRouter.post(routes.upload, postUpload);

postRouter.get(routes.deletePost(), deletePost);

postRouter.get(routes.postDetail(), postDetail);

export default postRouter;
