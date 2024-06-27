import connectDB from "@/backend/config/mongoose";
import { newProduct } from "@/backend/controllers/productControllers";

connectDB();

export const POST = newProduct;