import Head from 'next/head'
import axios from 'axios'
import ListProducts from '@/components/products/ListProducts'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const router = useRouter()
  const { query } = router
  const search = query.search || ''
  const page = query.page || 1

  const [productsData, setProductsData] = useState()

  useEffect(() => {
    const getProducts = async (search, page) => {
      const urlParams = {
        keyword: search,
        page: page,
      }

      const searchQuery = new URLSearchParams(urlParams).toString()
      console.log(searchQuery, 'searchQuery')

      // const { data } = await axios.get('https://fakestoreapi.com/products?' + searchQuery)
      const { data } = await axios.get('/api/products?' + searchQuery)
      setProductsData(data)
    }

    getProducts(search, page)
  }, [search, page])

  return (
    <>
      <Head>
        <title>Buy it now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListProducts data={productsData} />
      </main>
    </>
  )
}

export default Home
