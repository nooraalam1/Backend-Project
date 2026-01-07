# Backend Project

Packages Used:

- express
- mongoose
- dotenv
- nodemon
- prettier
- cors
- cookie-parser

## Folder Structure:

- src
  - controllers
  - middlewares
  - models
  - routes
  - db
    - index.js

                import mongoose from "mongoose" ;

                const connectDB = async() => {

                try{
                    const connectionInstance = await mongoose.connect(`${process.env.PASS}/${process.env.DB_NAME}`)
                    console.log("DB Connected !!! ")
                }

                catch(error){
                console.log(error);
                process.exit(1);
                }
            }

            export default connectDB;
