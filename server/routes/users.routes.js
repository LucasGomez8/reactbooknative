import { Router } from "express";

import { checkLogin, getAllUsers, getUserToFollow } from "../../controllers/users.controller";

const rt = Router();

rt.get("/users/api/getall/", getAllUsers);
rt.post("/users/api/login/", checkLogin);
rt.post('/users/api/follow', getUserToFollow );

export default rt;
