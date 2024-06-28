import ProductDetails from '@/components/Products/ProductDetails'
import React from 'react'

const getProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    const data = await res.json()
    return data
}

const ProductDetailsPage = async ({ params }) => {
    const { id } = params;
    const { product } = await getProduct(id);
    return (
        <>
            <ProductDetails product={product} />
        </>
    )
}

export default ProductDetailsPage
