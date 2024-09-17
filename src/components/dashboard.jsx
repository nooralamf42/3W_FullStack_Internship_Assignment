import React from 'react'
import { Wallet, Landmark, Waypoints } from 'lucide-react'
export default function Dashboard() {
  return (
    <div className='m-2 grid grid-cols-2 text-xs gap-2'>
        <div className='bg-white/50 rounded-xl p-2'>
            <h1 className=' text-sm tracking-wider font-semibold'>Wallet</h1>
            <div className='mt-0.5 flex p-1 shadow-xl w-fit ml-auto items-center gap-2 bg-white rounded-xl px-2'><Wallet color='green' size={16}/> <p className='text-sm text-green-500 font-semibold'>₹10</p></div>
        </div>
        <div className='bg-white/50 rounded-xl p-2'>
            <h1 className='text-sm tracking-wider font-semibold'>Earnings</h1>
            <div className='flex mt-0.5 p-1 shadow-xl w-fit ml-auto items-center gap-2 bg-green-50 rounded-xl px-2'><Landmark color='green' size={16}/> <p className='text-sm text-green-500 font-semibold'>₹100</p></div>
        </div>
        <div className='bg-white/80 rounded-xl p-2 col-span-2 flex justify-between items-center'>
            <h1 className='text-sm font-semibold'>Referrals</h1>
            <div className='flex items-center gap-1'><Waypoints size={16} color='blue'/> <p className='text-sm font-semibold text-blue-600'>50</p></div> 
        </div>
    </div>
  )
}
