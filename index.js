const dotenv = require('dotenv');
const http = require("http");
const fs = require('fs');
const debug = require("debug")("test_server:dev");

dotenv.config();
const httpPort = process.env.PORT || 8080;

const app = require("./src/app");
app.set(httpPort);


/* Create http server */
let server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof httpPort === "string" ? "Pipe " + httpPort : "Port " + httpPort;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(httpPort);
server.on("error", onError);
server.on("listening", onListening);
