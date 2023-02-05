import express, {Request, Response, Application} from 'express';
import Helmet from 'helmet';
import cors from 'cors';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import debug from 'debug';

import AppRoutesConfig from './common/app.routes.config';


const app:Application = express();
const debugLog: debug.IDebugger = debug('app');

// default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

//----------------------------
// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(Helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    frameguard: false,
}));


const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));

//----------------------------

const appRoutesConfig = new AppRoutesConfig(app, 'AppRoutesConfig');
debugLog('Routes configured: ', appRoutesConfig.getName());

export default app;