import React, {useEffect} from 'react'

export default function Splash({onDone}){
  useEffect(()=>{
    const t = setTimeout(()=> onDone(), 900)
    return ()=>clearTimeout(t)
  },[])
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl font-extrabold tracking-wide" style={{color:'#fff'}}>FRUITY</div>
        <div className="mt-4 text-sm text-white/90">Fresh Juice & Smoothies</div>
      </div>
    </div>
  )
}
