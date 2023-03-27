import express from "express";
import expressFileUpload from "express-fileupload";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import vacationsController from "./6-controllers/vacations-controller";
import cors from 'cors';
import authController from "./6-controllers/auth-controller";
import appConfig from "./2-utils/app-config";
import sanitize from "./3-middleware/sanitize";

const server = express();//Creates an Express server instance.

server.use(cors());//Adds CORS middleware to the Express server.
server.use(express.json());// Adds a JSON parser for handling incoming data in JSON format.
server.use(expressFileUpload());//Enables support for file uploads on the Express Server with express-fileupload library.
server.use(sanitize);// This is a middleware component which handles sanitization of incoming data to avoid malicious activity or code injection into my application.
server.use("/api", vacationsController);// Mounts the vacation controller route handler at /api prefix so all vacation routes will begin with /api.
server.use("/api", authController);// Mounts the authentication controller route handler at /api prefix so all authentication related routes will begin with /api.
server.use("*", routeNotFound);//Sets up a catch all route not found handler which catches any invalid requests and returns proper error responses.
server.use(catchAll);//Sets up a catch all handler which catches any invalid requests and returns proper error responses.

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));//Tells the Express server to start listening for requests at the port specified in appConfig and logs a message to console when successful connection is established.





