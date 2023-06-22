import Product from "../Models/Product";

export const newProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ product }); 
}