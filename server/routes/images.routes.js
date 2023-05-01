import { Router } from "express";
import path from "path"

const rt = Router();

rt.get(`/images/:imgName`, (req, res) => {

    const {imgName} = req.params;

    const imgPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'profiles', imgName);
    res.sendFile(imgPath);
});

rt.get(`/images/ports/:ports`, (req, res) => {
    
    const {ports} = req.params;

    const portPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'ports', ports);
    res.sendFile(portPath);
})

export default rt;