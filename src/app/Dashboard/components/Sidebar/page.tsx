import React from 'react'
import Image from 'next/image'
import { Nav } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Page = () => {

  const Pathname = usePathname();

  return (
    <div className='fixed w-72 h-[100svh] bg-[#1b1b1b] text-blue-500 z-0'>
        <div className='flex items-center content-center mb-64'>
          <Image src={"/Logo.jpg"} alt='Logo' width={50} height={20} className='rounded-full mt-6 ml-6'/>
          <p className='text-white mt-6 ml-2 font-bold'>Airhawk Exchange</p>
        </div>
      <nav>
        <ul>
          {Nav.map((link, i)=> {
            const active = Pathname === link.path;

            return(
              <li key={i}>
                <Link href={link.path} className='flex mt-2 font-bold'>
                  <div className={`flex mb-2 text-[1.1rem] p-4 pl-6 w-full ${active ? 'text-blue-500 bg-blue-200 ' : 'text-white'}`}><span className='mr-2'>{link.icon}</span>{link.label}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Page
