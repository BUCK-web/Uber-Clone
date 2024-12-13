import UserModel from "../models/Users.models.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import { response } from "express";



const registerUser = async(req,res,next)=>{
    const errs = validationResult(req)
    if (!errs.isEmpty) {
        res.status(400).json({errors: errs.array()});
    }
    
    try {
        const {fullname ,email , password} = req.body ;

        const hasshedpassword = await  UserModel.hashedPassword(password);
        
        const user = await createUser({
            firstname:fullname.firstname ,
            lastname : fullname.lastname,
            email,
            password: hasshedpassword
        });
    
        const token = user.generateAuthToken();
        res.status(200).json({token ,  user});
    
    } catch (error) {
        console.log(error);
        
        res.status(500).json({errors: error.message});        
    }


}



export {registerUser}