import Product from "../Models/Product";
import APIFilters from "../utils/APIFilters";

export const newProduct = async (request) => {
    try {
        if (request.headers.get("content-type") !== "application/json") {
            return Response.json({ success: false, error: "Invalid content type" }, { status: 400 });
        }
        const data = await request.json();
        const product = await Product.create(data);
        return Response.json({
            product: product,
            success: true,
        }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const getProducts = async (request) => {
    const keyword = request.nextUrl.searchParams.get("keyword");

    const apiFilters = new APIFilters(Product.find(), { keyword }).search();

    try {
        const products = await apiFilters.query;
        return Response.json({
            products: products,
            success: true,
        }, { status: 200 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
};

export const getProductById = async (request, { params }) => {
    try {
        const { id } = params;
        const product = await Product.findById(id);
        if (!product) {
            return Response.json({ success: false, error: "Product not found" }, { status: 404 });
        }
        return Response.json({
            product: product,
            success: true,
        }, { status: 200 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
};