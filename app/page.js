import ListProducts from '@/components/Products/ListProducts'
import React from 'react'

const getProducts = async (searchParams) => {
  const urlParams = new URLSearchParams(searchParams);
  console.log(urlParams, 'urlParams');
  const res = await fetch(`${process.env.NEXT_APP_API_URL}/api/products?${urlParams}`, {
    headers: {
      "cache-control": "no-cache",
    }
  })
  const data = await res.json()
  return data;
}

const HomePage = async ({ searchParams }) => {
  console.log(searchParams, 'search');
  const { products } = await getProducts(searchParams) || [];
  return (
    <ListProducts data={products} />
  )
}

export default HomePage
