import { Request, Response, json } from "express";
import express from "express";
import cors from "cors";
import router from "./routes/index.routes";
import errorHandler from "./middlewares/errorHandler.middlewares";

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`port running on port: ${PORT}`));
