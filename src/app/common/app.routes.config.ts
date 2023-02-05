import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import otpRouter from '../api/otp';
import sendfileRouter from '../api/sendfile';


export default class AppRoutesConfig extends CommonRoutesConfig {
    constructor(app: express.Application, name: string) {
        super(app, name);
    }

    configureRoutes() {
        this.app.use('/otp', otpRouter);
        this.app.use('/sendfile', sendfileRouter);

        return this.app;
    }
}
