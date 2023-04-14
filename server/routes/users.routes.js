import { Router } from "express";

import { checkLogin, getAllUsers } from "../../controllers/users.controller";

const rt = Router();

rt.get("/users/api/getall/", getAllUsers);
rt.post('/users/api/login/', checkLogin);


export default rt;