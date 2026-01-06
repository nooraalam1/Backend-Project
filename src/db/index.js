// import mongoose from "mongoose";

// const connetDB = async()=>{

// 	try{
// 		const connectionInstance = await mongoose.connect( `${process.env.MONGODB_PASS}/${process.env.DB_NAME}`);
// 		console.log(connectionInstance);
// 	}

// 	catch(error){
// 		console.log(error);
// 		process.exit(1);
// 	}

// }

// export default connetDB;


import mongoose from "mongoose";

const connectDB = async()=>{

try{
	await mongoose.connect(`${process.env.MONGODB_PASS}/${process.env.DB_NAME}`);
	console.log("DB Connected !!! \n")
}

catch(error){
console.log(error);
}

}

export default connectDB;