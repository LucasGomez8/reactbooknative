import express from "express"
import cors from "cors"
import { PORT } from "./config";
import UserRouter from "./routes/users.routes.js"
import PostRouter from "./routes/post.routes.js"
import ImageRouter from "./routes/images.routes.js"

const app =  express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(PostRouter);
app.use(ImageRouter);
app.listen(PORT);

console.log(
    `on ${PORT}`
)