import UserModel from "../models/Users.models.js";

const createUser = async ({
    firstname, lastname , email, password
})=>{
    console.log(email,password,firstname,lastname);
    
    if (!email || !password || !firstname || !lastname){
        throw new Error("All fields are required");
    }
    const user = UserModel.create({
        fullName : {
            firstname,
            lastname
        } ,
        email,
        password
        
    })

    return user

}

export {createUser}