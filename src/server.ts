//imports
import express from "express";
import type { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db/connect.js";
import passwordRouter from "./logic/api.js";
import dotenv from 'dotenv';


dotenv.config();
// consts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT) || 3000;


app.use(express.static('public'));
app.use(express.static('private'));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// NEED TO CHANGE TO MAKE IT NOT PUBLIC
app.get("/password", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../private/password.html"))
})
app.use("/api", passwordRouter);
async function startServer() {
    await connectDB(process.env.DB as string);
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}
startServer()
