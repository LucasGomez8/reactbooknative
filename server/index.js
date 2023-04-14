import express from "express"
import cors from "cors"
import { PORT } from "./config";
import UserRouter from "./routes/users.routes.js"

const app =  express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.listen(PORT);

console.log(
    `on ${PORT}`
)