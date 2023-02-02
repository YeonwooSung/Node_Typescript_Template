import { Router, Request, Response } from "express";
import {
    validateFilePath, 
    INVALID_FILE_PATH
} from "../utils/file_handler";

const router = Router();
const TARGET_FILE = "target_file.txt";

router.post('/', (req: Request, res: Response) => {
    let file_path:string = validateFilePath(TARGET_FILE);
    switch (file_path) {
        case INVALID_FILE_PATH:
            res.send("File not exist");
            break;
        default:
            res.sendFile(file_path);
    }
});

export default router;