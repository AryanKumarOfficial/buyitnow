import Product from "../Models/Product";
import APIFilters from "../utils/APIFiters";

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
}

export const getProducts = async (req, res, next) => {

    const resPerPage = 3;
    const productsCount = await Product.countDocuments();

    const apifilters = new APIFilters(Product.find(), req.query).search().filter();

    let products = await apifilters.query;
    const filteredProductsCount = products.length;

    apifilters.pagination(resPerPage);


    products = await apifilters.query.clone();


    // const products = await Product.find();
    res.status(200).json({
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    });
}

export const getProduct = async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    // if (!product) {
    //     return res.status(404).json({
    //         success: false,
    //         message: 'Product not found'
    //     })

    // }
    res.status(200).json({ product });
}