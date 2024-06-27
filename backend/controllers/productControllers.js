import Product from "../Models/Product";
import { NextResponse } from "next/server";
export const newProduct = async (request) => {
    const data = await request.json();
    const product = await Product.create(data);
    return NextResponse.json({ success: true, product });
}