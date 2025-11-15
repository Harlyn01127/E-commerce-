import React from 'react'
import Cart from '../components/Cart'

export default function CartPage({items, onCheckout, removeAt}){
  return (
    <div className="px-3 py-2">
      <Cart items={items} onCheckout={onCheckout} removeAt={removeAt} />
    </div>
  )
}
