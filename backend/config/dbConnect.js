import mongoose from "mongoose";


const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));

}

export default connectDB; // export default connectDB;