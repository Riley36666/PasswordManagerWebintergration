//imports
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./db/connect.js";
import passwordRouter from "./src/api.js";
import dotenv from 'dotenv';


dotenv.config();
// consts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 9999;


app.use(express.static('public'));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})
app.use("/api", passwordRouter);
async function startServer() {
    await connectDB(process.env.db);
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}
startServer();