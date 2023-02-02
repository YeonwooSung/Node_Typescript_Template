import express, {Request, Response, Application} from 'express';

const app:Application = express();

// default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

//----------------------------
// routers

import otpRouter from './api/otp';
import sendfileRouter from './api/sendfile';

app.use('/otp', otpRouter);
app.use('/sendfile', sendfileRouter);

//----------------------------


export default app;