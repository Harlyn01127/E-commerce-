import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Splash from './components/Splash'
import Auth from './components/Auth'
import ProductDetail from './components/ProductDetail'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ProfilePage from './pages/ProfilePage'
import useCart from './hooks/useCart'
import products from './data/products'

function AppShell({children, onOpen}){
  return (
    <div className="app-shell relative flex flex-col" style={{background:'linear-gradient(180deg,#ff6b6b,#ff7a6b)'}}>
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-xl">FRUITY</div>
          <div className="text-sm small-muted">Fresh Juice & Smoothies</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-fruityYellow flex items-center justify-center text-black font-bold">A</div>
      </div>

      <div className="flex-1 overflow-auto pb-28">
        {children}
      </div>

      <div className="absolute left-4 right-4 bottom-4">
        <BottomNavWrapper />
      </div>
    </div>
  )
}

function BottomNavWrapper(){
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const active = pathname.startsWith('/cart') ? 'cart' : pathname.startsWith('/profile') ? 'profile' : 'home'
  return <BottomNav active={active} onChange={(k)=> navigate(k==='home'?'/': k==='cart'?'/cart':'/profile')} />
}

export default function App(){
  const [phase,setPhase] = useState('splash') // splash, auth, main
  const [selected,setSelected] = useState(null)
  const cart = useCart()

  const onSigned = ()=> setPhase('main')
  const onOpen = (p)=> setSelected(p)
  const onClose = ()=> setSelected(null)
  const onAdd = (p)=>{ cart.add(p); setSelected(null) }

  if(phase==='splash') return <div className="app-shell"><Splash onDone={()=>setPhase('auth')} /></div>
  if(phase==='auth') return <div className="app-shell"><Auth onSigned={onSigned} /></div>

  return (
    <BrowserRouter>
      <AppShell onOpen={onOpen}>
        <Routes>
          <Route path="/" element={<Home onOpen={onOpen} products={products} />} />
          <Route path="/cart" element={<CartPage items={cart.items} onCheckout={()=>alert('Checkout - thank you!')} removeAt={cart.removeAt} />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AppShell>

      {selected && <ProductDetail product={selected} onClose={onClose} onAdd={onAdd} />}
    </BrowserRouter>
  )
}
