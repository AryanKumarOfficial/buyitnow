import ListProducts from '@/components/Products/ListProducts'
import React from 'react'

const getProducts = async (searchParams) => {
  const urlParams = new URLSearchParams(searchParams);
  urlParams.append('ratings[gte]', searchParams.ratings || 0);
  urlParams.delete('ratings');
  const res = await fetch(`${process.env.NEXT_APP_API_URL}/api/products?${urlParams}`, {
    headers: {
      "cache-control": "no-cache",
    }
  })
  const data = await res.json()
  return data;
}

const HomePage = async ({ searchParams }) => {
  const products = await getProducts(searchParams) || [];
  return (
    <>
      <ListProducts data={products} />
    </>
  )
}

export default HomePage
