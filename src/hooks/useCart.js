import {useState, useEffect} from 'react'

const STORAGE_KEY = 'fruity_cart_v1'

export default function useCart(){
  const [items, setItems] = useState(()=>{
    try{
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    }catch(e){
      return []
    }
  })

  useEffect(()=>{
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) }catch(e){}
  },[items])

  const add = (p)=> setItems(prev => [...prev, p])
  const clear = ()=> setItems([])
  const removeAt = (idx)=> setItems(prev => prev.filter((_,i)=>i!==idx))

  const total = items.reduce((s,i)=>s + (i.price || 0), 0)

  return {items, add, clear, removeAt, total}
}
