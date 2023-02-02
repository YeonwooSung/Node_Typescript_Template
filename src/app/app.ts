import express, {Request,Response,Application} from 'express';

const app:Application = express();

// default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

export default app;