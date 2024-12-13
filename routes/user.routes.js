import express from 'express';
import { body } from 'express-validator';
import { registerUser } from '../controllers/user.controllers.js';


const userRouter = express.Router();

userRouter.post("/register",[
    body("fullName.firstName").isLength({min:3}).withMessage("firstName must be a minimum of 6 characters"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min: 6}).withMessage("Password should be at least 8 characters long")
]
, registerUser
)


export default userRouter