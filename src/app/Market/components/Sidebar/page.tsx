import React from 'react'
import Image from 'next/image'
import { Nav } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='hidden lg:block w-full lg:w-3/12 h-[86svh] bg-[#1b1b1b] text-white border-r z-[0] p-2'>
      <h1 className='text-center font-bold'>Buy Orders</h1>
    </div>
  )
}

export default Page
