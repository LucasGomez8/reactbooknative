import { Router } from "express";

import { checkLogin, getAllUsers } from "../../controllers/users.controller";

const rt = Router();

rt.get("/users/api/getall/", getAllUsers);
rt.get("/users/api/login/:email/:password", checkLogin);

export default rt;
