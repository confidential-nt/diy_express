import routes from "./routes";

export const localsMiddlewares = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Postone Type";
  res.locals.user = {
    id: 1234,
    isAuthenticated: true,
  };
  next();
};
