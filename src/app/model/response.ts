interface BaseResponse {
    code: number;
}

interface OtpResponse extends BaseResponse {
    otp: string;
}

export {
    BaseResponse,
    OtpResponse
}