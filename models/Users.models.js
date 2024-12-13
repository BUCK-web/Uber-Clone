import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  fullName: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be three character or more"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be three character or more"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    // minlength: [8, "Password must be at least 8 characters long"],
    select : false
  },
  sokcetId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
  return token;
}

userSchema.methods.comparePassword = async ()=>{
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashedPassword = async (password)=>{
    return await bcrypt.hash(password,10);
}


const UserModel= mongoose.model("user", userSchema);

export default UserModel;

