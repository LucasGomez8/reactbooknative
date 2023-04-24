import { Router } from "express";
import path from "path"

const rt = Router();

rt.get(`/images/:imgName`, (req, res) => {

    const {imgName} = req.params;

    const imgPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'profiles', imgName);
    res.sendFile(imgPath);
});

export default rt;