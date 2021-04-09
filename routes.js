//Global
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const HOME = "/";

//User
const USERS = "/users";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";
const EDIT_PROFILE = "/edit-profile";

//Post
const POSTS = "/posts";
const POST_DETAIL = "/:id";
const EDIT_POST = "/:id/edit";
const UPLOAD = "/upload";
const DELETE_POST = "/:id/delete";

const routes = {
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  home: HOME,
  users: USERS,
  userDetail: (id = null) => {
    if (id) return `/users/${id}`;

    return USER_DETAIL;
  },
  changePassword: CHANGE_PASSWORD,
  editProfile: EDIT_PROFILE,
  posts: POSTS,
  postDetail: (id = null) => {
    if (id) return `/posts/${id}`;

    return POST_DETAIL;
  },
  editPost: (id = null) => {
    if (id) return `/posts/${id}/edit`;

    return EDIT_POST;
  },
  upload: UPLOAD,
  deletePost: (id = null) => {
    if (id) return `/posts/${id}/delete`;

    return DELETE_POST;
  },
};

export default routes;
