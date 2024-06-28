import ListProducts from '@/components/Products/ListProducts'
import React from 'react'

const getProducts = async () => {
  const res = await fetch(`${process.env.NEXT_APP_API_URL}/api/products`)
  const data = await res.json()
  return data;
}

const HomePage = async () => {
  const { products } = await getProducts() || [];
  return (
    <ListProducts data={products} />
  )
}

export default HomePage
