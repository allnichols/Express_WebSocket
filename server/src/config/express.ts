import express, { Express } from "express";
import cors from "cors";
import router from "../api/routes";

const app: Express = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(router);

export default app;