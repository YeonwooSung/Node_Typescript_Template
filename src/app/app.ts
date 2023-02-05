import express, {Request, Response, Application} from 'express';
import Helmet from 'helmet';

const app:Application = express();

// default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

//----------------------------
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    frameguard: false,
}));

//----------------------------
// routers

import otpRouter from './api/otp';
import sendfileRouter from './api/sendfile';

app.use('/otp', otpRouter);
app.use('/sendfile', sendfileRouter);

//----------------------------


export default app;