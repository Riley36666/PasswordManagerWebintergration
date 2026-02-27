import express from "express";
import Password from "./../db/models/Password.js"; 
import {deriveKey, decryptPass} from "./../src/decryptpass.js"
const secret = deriveKey();
const router = express.Router();



router.get("/passwords", async (req, res) => {
    try {
        const passwords = await Password.find({}, { _id: 0, Website: 1, Password: 1 });
        const decrypted = passwords.map(pw => ({
            Website: pw.Website,
            Password: decryptPass(pw.Password, secret)
        }));
        res.json(decrypted);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

export default router;