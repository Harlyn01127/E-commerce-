import React from 'react'

export default function ProductDetail({product, onClose, onAdd}){
  if(!product) return null
  return (
    <div className="absolute inset-0 flex items-end justify-center p-4">
      <div className="w-full max-w-md rounded-2xl p-5 bg-white text-black shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-lg font-bold">{product.name}</div>
            <div className="text-sm text-gray-600">{product.unit} • ₱{product.price}</div>
          </div>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>
        <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg my-3" />
        <p className="text-sm text-gray-700">{product.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold">₱{product.price}</div>
          <button onClick={()=>onAdd(product)} className="px-4 py-2 bg-[#ff6b6b] text-white rounded-xl">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
