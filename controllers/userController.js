import routes from "../routes";

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password === password2) {
    res.redirect(routes.home);
    return;
  }
  res.status(400);
  res.render("join", { pageTitle: "Join" });
};
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postLogin = (req, res) => {
  const {
    body: { email, password },
  } = req;

  res.redirect(routes.home);
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const logout = (req, res) => res.redirect(routes.home);

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
