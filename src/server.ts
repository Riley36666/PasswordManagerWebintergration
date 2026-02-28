import express = require("express");
import session = require("express-session");
import path = require("path");
import { connectDB } from "./db/connect";
import passwordRouter from "./logic/api";
import dotenv = require("dotenv");
import type { Request, Response, NextFunction } from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { 
      maxAge: 1000 * 60 * 60,
      secure: false }
  })
);

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.isAuth) return next();
  return res.status(401).send("Unauthorized");
}

app.use(express.static("public"));
app.use(express.static("private"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), "public/login.html"));
});

app.get("/password", requireAuth, (req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), "private/password.html"));
});

app.use("/api", passwordRouter);

async function startServer() {
  await connectDB(process.env.DB as string);
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}

startServer();
