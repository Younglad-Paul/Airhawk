import React from 'react'
import Image from 'next/image'
import { Nav } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='w-full lg:w-3/12 h-[86svh] text-white lg:border-l p-2'>
      <h1 className='text-center font-bold'>Sell Orders</h1>
    </div>
  )
}

export default Page
