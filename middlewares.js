import routes from "./routes";
// import multer from "multer";

// const multerPost = multer({ dest: "uploads/posts/" });

export const localsMiddlewares = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Postone Type";
  res.locals.user = {
    id: 1234,
    isAuthenticated: true,
  };
  next();
};

// export const uploadPost = multerPost.single("content");
