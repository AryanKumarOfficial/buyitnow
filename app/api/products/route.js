import connectDB from "@/backend/config/mongoose";
import { getProducts, newProduct } from "@/backend/controllers/productControllers";

connectDB();

export const POST = newProduct;

export const GET = getProducts;