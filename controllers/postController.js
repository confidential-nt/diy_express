import routes from "../routes";
import Post from "../models/Post";

export const home = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render("home", { pageTitle: "Home", posts });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", posts: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  let posts = [];

  try {
    posts = await Post.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }

  res.render("search", { pageTitle: "Search", posts, searchingBy });
};

export const postDetail = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const post = await Post.findById(id);
    res.render("postDetail", { pageTitle: "Post Detail", post });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditPost = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const post = await Post.findById(id);
    res.render("editPost", { pageTitle: "Edit Post", post });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditPost = async (req, res) => {
  const {
    params: { id },
    body: { title, description, content },
  } = req;

  try {
    await Post.findOneAndUpdate({ _id: id }, { title, description, content });
    res.redirect(routes.postDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postUpload = async (req, res) => {
  const {
    body: { title, desc, content },
  } = req;

  const newPost = await Post.create({
    content,
    title,
    description: desc,
  });

  res.redirect(routes.postDetail(newPost.id));
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const deletePost = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Post.findOneAndDelete({ _id: id });
  } catch (error) {}

  res.redirect(routes.home);
};
