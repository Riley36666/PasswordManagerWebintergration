import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema(
  {
    Website: {
      type: String,
      required: true
    },
    Password: {
      type: Buffer, 
      required: true
    }
  },
  {
    collection: "Passwords" 
  }
);

export default mongoose.model("Password", passwordSchema);