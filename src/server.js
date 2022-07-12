import express from "express";
import { } from 'dotenv/config'
import configViewEngine from "./config/viewEngine.js";
import initWebRoute from "./route/web.js";

const app = express();
const port = process.env.PORT;

configViewEngine(app)

initWebRoute(app)

app.listen(port, () => {
    console.log(`Example listening at http://localhost:${port}`);
})