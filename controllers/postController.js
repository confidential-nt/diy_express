export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const postDetail = (req, res) =>
  res.render("postDetail", { pageTitle: "Post Detail" });
export const editPost = (req, res) =>
  res.render("editPost", { pageTitle: "Edit Post" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const deletePost = (req, res) =>
  res.send("deletePost", { pageTitle: "Delete Post" });
