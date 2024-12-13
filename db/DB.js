import mongoose from "mongoose";

const connectToDb = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database connected")
    })
    .catch((error)=>{
        console.log(error)
    })
}

export default connectToDb;
