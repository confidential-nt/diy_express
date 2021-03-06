import dotenv from "dotenv";
dotenv.config();
import "./db";
import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Linked to http://localhost:${PORT}`));
