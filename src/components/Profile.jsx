import React from 'react'

export default function Profile(){
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-yellow-300" />
        <div>
          <div className="font-bold text-lg">Admin</div>
          <div className="text-sm text-white/80">admin@fruity.com</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="p-3 bg-white/10 rounded-lg">Product Management</div>
        <div className="p-3 bg-white/10 rounded-lg">Order Management</div>
      </div>
    </div>
  )
}
