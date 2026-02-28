import express, { Request, Response } from "express";
import Password from "../db/models/Password.js";
import { deriveKey, decryptPass } from "./decryptpass.js";

const secret = deriveKey();
const router = express.Router();

router.get("/passwords", async (req: Request, res: Response): Promise<void> => {
  try {
    const passwords = await Password.find(
      {},
      { _id: 0, Website: 1, Password: 1 }
    );

    const decrypted = passwords.map((pw) => ({
      Website: pw.Website,
      Password: decryptPass(pw.Password, secret),
    }));

    res.json(decrypted);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    res.status(500).send("Server error");
  }
});

export default router;