import React, {useState} from 'react'

export default function Auth({onSigned}){
  const [tab, setTab] = useState('login')
  const [form, setForm] = useState({email:'', password:'', name:''})
  return (
    <div className="p-6 h-full flex flex-col justify-center">
      <div className="text-center mb-4">
        <div className="text-3xl font-bold">FRUITY</div>
        <div className="text-sm mt-1">{tab === 'login' ? 'Sign in' : 'Create account'}</div>
      </div>
      <div className="space-y-3">
        {tab === 'signup' && (
          <input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full p-3 rounded-lg text-black" />
        )}
        <input placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full p-3 rounded-lg text-black" />
        <input type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} className="w-full p-3 rounded-lg text-black" />
        <button onClick={()=>onSigned()} className="w-full py-3 bg-[#ffd449] text-black rounded-lg font-semibold">{tab==='login'?'Sign In':'Sign Up'}</button>
        <div className="text-center text-sm mt-2">
          <button onClick={()=>setTab(tab==='login'?'signup':'login')} className="underline">{tab==='login'?"Create an account":"Already have an account? Sign in"}</button>
        </div>
      </div>
    </div>
  )
}
