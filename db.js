import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false, //직접 쓰면서 true랑은 차이점이 뭔지 알아봐야 할듯
  })
  .catch(handleError);

const db = mongoose.connection; //For practical reasons, a Connection equals a Db.

const handleOpen = () => console.log("Connect to Data Base!");
const handleError = (error) =>
  console.log(`Fail to connect to Data Base!: ${error}`);

db.once("open", handleOpen);

mongoose.connection.on("error", (err) => {
  handleError(err);
});

//내일 더 자세히 옵션과 함수들에 대해 공부해보는 걸로
