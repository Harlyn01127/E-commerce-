import React from 'react'

export default function BottomNav({active, onChange}){
  const items = [
    {k:'home', l:'Home', icon: '🏠'},
    {k:'cart', l:'Cart', icon: '🛒'},
    {k:'profile', l:'Profile', icon: '👤'}
  ]
  return (
    <div className="w-full p-3 flex items-center justify-around border-t border-white/10 bg-white/5 rounded-xl">
      {items.map(it=> (
        <button key={it.k} onClick={()=>onChange(it.k)} className={`flex flex-col items-center text-sm ${active===it.k? 'text-white':'text-white/80'}`}>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${active===it.k? 'bg-white/20':'bg-white/10'}`}>{it.icon}</div>
          <div className="mt-1">{it.l}</div>
        </button>
      ))}
    </div>
  )
}
