import posts from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", posts });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  res.render("search", { pageTitle: "Search", posts, searchingBy });
};

export const postDetail = (req, res) =>
  res.render("postDetail", { pageTitle: "Post Detail" });
export const editPost = (req, res) =>
  res.render("editPost", { pageTitle: "Edit Post" });

export const postUpload = (req, res) => {
  const {
    body: { title, desc, cotent },
  } = req;

  res.redirect(routes.postDetail(1234));
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const deletePost = (req, res) =>
  res.send("deletePost", { pageTitle: "Delete Post" });
