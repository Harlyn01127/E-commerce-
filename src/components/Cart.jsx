import React from 'react'

export default function Cart({items, onCheckout, removeAt}){
  const total = items.reduce((s,i)=>s+i.price,0)
  return (
    <div className="p-4 space-y-4">
      <div className="font-bold text-lg">Cart</div>
      <div className="space-y-2">
        {items.length===0 && <div className="text-sm text-white/80">Your cart is empty</div>}
        {items.map((it,idx)=> (
          <div key={idx} className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={it.img} className="w-12 h-12 rounded-md object-cover" />
              <div>
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-white/80">₱{it.price}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>removeAt(idx)} className="text-sm px-2 py-1 bg-white/10 rounded">Remove</button>
              <div className="text-sm">1x</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="text-sm">Total</div>
        <div className="font-bold">₱{total}</div>
      </div>
      <button onClick={onCheckout} className="w-full py-3 bg-[#ffd449] text-black rounded-xl">Checkout</button>
    </div>
  )
}
