import express from "express";
import cors from "cors";

import selectTravel from "./router/selectRoute.js";
import insertTravel from "./router/insertRoute.js";
import updateTravel from "./router/updateRoute.js";
import deleteTravel from "./router/deleteRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/select", selectTravel);
app.use("/insert", insertTravel);
app.use("/update", updateTravel);
app.use("/delete", deleteTravel);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
