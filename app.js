import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import uuid from "node-uuid";
import qs from "qs";
import routes from "./routes";
import globalRouter from "./routers/globalRouters";
import userRouter from "./routers/userRouters";
import postRouter from "./routers/postRouters";
import { localsMiddlewares } from "./middlewares";

morgan.token("id", function getId(req) {
  return req.id;
});

const app = express();

app.use(helmet());
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //나중에 true fasle 차이 볼것.
app.use(assignId);
app.use(morgan(":id :method :url :response-time"));

function assignId(req, res, next) {
  req.id = uuid.v4();
  next();
}

app.use(localsMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.posts, postRouter);

export default app;
