import * as dotenv from "dotenv";
import app from "./server";
import "reflect-metadata";
import "@config/database/connection";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
