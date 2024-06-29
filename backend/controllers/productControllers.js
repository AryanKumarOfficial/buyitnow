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

    try {
        const keyword = request.nextUrl.searchParams.get("keyword");
        const queryStr = {}
        for (let [key, value] of request.nextUrl.searchParams) {
            queryStr[key] = value
        }

        const resPerPage = 2;
        const productCount = await Product.countDocuments();

        const apiFilters = new APIFilters(Product.find(), queryStr).search().filter();

        let products = await apiFilters.query;
        let filteredProductsCount = products.length;

        apiFilters.paginate(resPerPage);

        products = await apiFilters.query.clone();
        return Response.json({
            products: products,
            productCount,
            resPerPage,
            filteredProductsCount,
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