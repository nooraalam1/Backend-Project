import mongoose from "mongoose";

const connectDB = async()=>{

	try{
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_PASS}/${process.env.DB_NAME}`);
		console.log("DB Connected !!! \n")
	}

	catch(error){
		console.log("DB Connection Error ",error);
		process.exit(1);
	}
}

export default connectDB;