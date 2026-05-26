import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { exec } from "child_process";

const SERVER_PORT = process.env.SERVER_PORT || 8080;

//conditional for child_process working under cross platform conditions
const start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
      ? "start"
      : "xdg-open";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

import apiRoutes from "./routes/api-routes.mjs";

apiRoutes(app);

//CONFIGURE FOR HEROKU DEPLOYMENT

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("client/build"));
  // Handle React routing, return all requests to React app
  app.get("/", function (req, res) {
    res.sendFile("client/build", "index.html");
  });

  //listen for requests
  app.listen(SERVER_PORT, "0.0.0.0", () => {
    if (process.env.NODE_ENV_PRODUCTION_TEST === "true") {
      //opens up localhost address on browser
      exec(`${start} http://localhost:${SERVER_PORT}/`);
      console.log(
        `Server is running on port ${SERVER_PORT} in production mode.`,
      );
    } else {
      //opens up production address on browser
      exec(`${start} https://www.wsrjj.org/`);
      console.log(
        `Server is running on port ${SERVER_PORT} in production address.`,
      );
      console.log(
        `PRODUCTION TEST (env variable) = ${process.env.NODE_ENV_PRODUCTION_TEST || "NONE"} `,
      );
    }
  });
} else {
  //listen for requests in development mode
  app.listen(SERVER_PORT, () => {
    console.info(`server has started on ${SERVER_PORT} in development mode`);
  });
}
