import {
    Router,
    Request,
    Response
} from "express";
import { OtpResponse } from "../model/response";

const router = Router();

const DATETIME_CALC_FACTOR = 1000;
const OTP_FIXED_LENGTH = 48;

// POST router
router.post("/", (req: Request, res: Response) => {
    let curr_time = Math.round(new Date().getTime() / DATETIME_CALC_FACTOR).toString();
    let otp_base64 = Buffer.from(curr_time).toString("base64");
    let otp = otp_base64.substring(otp_base64.length - OTP_FIXED_LENGTH);

    let response: OtpResponse = {
        code: 200,
        otp: otp
    };
    res.send(JSON.stringify(response));
});

export default router;