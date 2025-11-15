import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products, onOpen}){
  return (
    <div className="px-4 py-3 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {products.map(p => (
          <ProductCard key={p.id} p={p} onOpen={onOpen} />
        ))}
      </div>
    </div>
  )
}
