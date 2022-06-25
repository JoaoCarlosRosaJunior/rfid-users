import "reflect-metadata";
import express from "express";
import "./shared/container";
import "./database";
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3333, () => console.log("Ther server is running"));