import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minLength: 2,
      maxLength: 100,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      maxLength: 255,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minLength: 4,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
