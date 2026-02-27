import mongoose from "mongoose";
import Password from "./models/Password.js";


export async function connectDB(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI, {
        dbName: "PasswordManager"
    });
    //console.log("MongoDB connected");
  } catch (err) {
    //console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}


// export async function getPasswords(){
//         const passwords = await Password.find({}, { _id: 0, Website: 1, Password: 1 });
//         passwords.forEach(pw => {
//         return pw.Website + decryptPass(pw.Password, secret)
//         console.log("Website:", pw.Website);
//         console.log("Password:", decryptPass(pw.Password, secret));
//         });
//     }