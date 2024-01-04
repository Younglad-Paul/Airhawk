'use client'
import {useState} from 'react'
import Image from 'next/image'
import { marketNav } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'   
import { X, AlignRight } from 'lucide-react';
import Link from 'next/link'

const Page = () => {
  const [mobile, isMobile] = useState<boolean>(true)
  const pathname = usePathname();
  
  return (
    <div className={`fixed flex lg:hidden z-50 text-white w-full shadow-xl ${mobile ? 'h-0' : 'h-full'}`}>
        <div className={`grid bg-[#1b1b1b] ${mobile ? 'w-0' : 'w-full'}`}>
      <section className={`items-center w-full h-20 mt-2 pl-10 ${mobile ? 'hidden' : 'flex'}`}>
        <div className='flex items-center w-full'>
        <Image src={'/Logo.jpg'} alt='Logo' width={50} height={50} className='rounded-full'/>
        <p className='font-bold ml-2'>Airhawk Exchange</p>
        </div>
        <div className='flex justify-end  pr-6 '>
        <X  onClick={() => isMobile (!mobile)}/>
        </div>
      </section>
      <section className='w-full flex mt-[-15rem]'>
        <nav className='block lg:hidden w-full mr-4 '>
          {marketNav.map((link, i) => {
            const active = pathname === link.path;

            return(
              <li key={i} className=' grid w-full '>
                <Link href={link.path}>
                  <div className={`p-4 pl-10 w-full grid  font-bold   ${active ? 'bg-blue-500 bg-opacity-50' : 'bg-transparent'}`}>
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </nav>
      </section>
      </div>
      <div className={`flex justify-end pt-8  ${mobile ? 'w-full' : 'w-0'}`}>
      <AlignRight className='block lg:hidden mr-4 ' onClick={() => isMobile (!mobile)}/>
      </div>
    </div>
  )
}

export default Page
