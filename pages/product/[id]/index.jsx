import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetailsPage = ({ params }) => {
  const [product, setProduct] = useState();
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
    const getProductDetails = async (id) => {
      const { data } = await axios.get(`http://localhost:3000/api/products/${id}`)

      setProduct(data.product);
    };
    getProductDetails(router.query.id);
    console.log(product);
  }, []);
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;
