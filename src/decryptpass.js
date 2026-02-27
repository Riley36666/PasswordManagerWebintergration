import fs from "fs";
import path from "path";
import crypto from "crypto";
import fernet from "fernet";
import dotenv from "dotenv";

dotenv.config();
const { Secret, Token } = fernet;



// === Config ===
const SALT_FILE = path.join(process.cwd(), "salt.bin");
const ITERATIONS = 200_000;

// === Load salt (or create if missing) ===
function loadOrCreateSalt() {
  if (fs.existsSync(SALT_FILE)) {
    return fs.readFileSync(SALT_FILE);
  }
  const salt = crypto.randomBytes(16);
  fs.writeFileSync(SALT_FILE, salt);
  return salt;
}

// === Derive Fernet key from salt ===
export function deriveKey() {
  const salt = loadOrCreateSalt();

  const rawKey = crypto.pbkdf2Sync(
    process.env.MASTER_PASSWORD, 
    salt,
    200_000,
    32,
    "sha256"
  );

  const key = rawKey
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return new Secret(key);
}

// === Decrypt function ===
export function decryptPass(tokenBuffer, secret) {
  const tokenBase64 = tokenBuffer.toString("utf-8");
  const token = new Token({ token: tokenBase64, secret });
  return token.decode();
}