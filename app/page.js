import ListProducts from '@/components/Products/ListProducts'
import React from 'react'
import querySting from 'query-string'

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    'price[gte]': searchParams.min,
    'price[lte]': searchParams.max,
    'ratings[gte]': searchParams.ratings
  }

  const searchQuery = querySting.stringify(urlParams)

  console.log(searchQuery, 'searchQuery');


  const res = await fetch(`${process.env.NEXT_APP_API_URL}/api/products?${searchQuery}`, {
    cache: 'no-cache',
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
