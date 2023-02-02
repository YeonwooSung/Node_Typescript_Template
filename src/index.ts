import dotenv from 'dotenv';
import http from 'http';

// custom imports
import app from './app/app';

dotenv.config();

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
const debug = require("debug")("node-server:dev");

// set port number to express app
app.set('port', PORT);

/**
 * Error handler for HTTP server "error" event.
 */
function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    let addr = server.address();
    if (addr === null) return;
    let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
}

server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
server.on("error", onError);
server.on("listening", onListening);
