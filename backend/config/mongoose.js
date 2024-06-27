import mongoose from 'mongoose'

const connectDB = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI)
}

export default connectDB;