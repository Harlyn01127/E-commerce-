import React from 'react'
import ProductList from '../components/ProductList'
import products from '../data/products'

export default function Home({onOpen}){
  return (
    <div className="px-3 py-2">
      <div className="mb-2">
        <div className="font-bold text-xl">Hello, welcome</div>
        <div className="text-sm small-muted">Choose your fresh juice</div>
      </div>
      <ProductList products={products} onOpen={onOpen} />
    </div>
  )
}
