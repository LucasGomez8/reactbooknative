import { Router } from "express";
import { getAllPosts } from "../../controllers/posts.controller";

const rt = Router();

rt.post("/posts/api/getall/", getAllPosts);

export default rt;
