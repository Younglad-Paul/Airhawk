'use client'
import Image from 'next/image'
import { marketNav } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'   
import Link from 'next/link'

const Page = () => {
  const pathname = usePathname();
  
  
  return (
    <div className='fixed flex z-50 text-white w-full bg-[#1b1b1b]  h-24 shadow-xl  pl-10'>
      <section className='flex items-center w-full'>
        <Image src={'/Logo.jpg'} alt='Logo' width={50} height={50} className='rounded-full'/>
        <p className='font-bold ml-2'>Airhawk Exchange</p>
      </section>
      <section className=' flex items-center justify-end'>
        <nav className='hidden lg:flex items-center mt-2 justify-end'>
          {marketNav.map((link, i) => {
            const active = pathname === link.path;

            return(
              <li key={i} className=' flex '>
                <Link href={link.path}>
                  <div className={`p-4 w-32 flex justify-center rounded-md font-bold hover:shadow-md hover:shadow-blue-500 mr-4 ${active ? 'bg-blue-500 bg-opacity-50' : 'bg-transparent'}`}>
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </nav>
      </section>
    </div>
  )
}

export default Page
