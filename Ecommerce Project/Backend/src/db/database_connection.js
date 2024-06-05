import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        console.log(
            `Database connected!! DB Host ${connectionInstance.connection.host}`
          );
    } catch (error) {
        console.log(`Database Connection Error ${error}`);
    process.exit(1);
    }
}
export default connectDb;