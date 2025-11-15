import React from 'react'

export default function ProductCard({p, onOpen}){
  return (
    <div className="card-bg p-3 rounded-lg text-black flex flex-col shadow-sm" style={{background:'#fff'}}>
      <img src={p.img} alt={p.name} className="w-full h-36 object-cover rounded-md shadow-sm" />
      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="font-bold text-lg">{p.name}</div>
          <div className="text-sm text-gray-600">{p.unit}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold">₱{p.price}</div>
          <button onClick={()=>onOpen(p)} className="mt-2 px-3 py-1 bg-[#ff6b6b] text-white rounded-full text-sm">View</button>
        </div>
      </div>
    </div>
  )
}
