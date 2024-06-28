import Product from "../Models/Product";


export const newProduct = async (request) => {
    try {
        if (request.headers.get("content-type") !== "application/json") {
            return Response.json({ success: false, error: "Invalid content type" }, { status: 400 });
        }
        const data = await request.json();
        const product = await Product.create(data);
        return Response.json({
            product: JSON.stringify(product),
            success: true,
        }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 })
    }

}

