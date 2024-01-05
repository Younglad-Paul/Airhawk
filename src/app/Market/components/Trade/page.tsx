'use client'
import { useState } from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../../ul/tradeStyles.css'
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { TransType } from '@/app/ul/Navs'

const Page = () => {
    const [select, isSelected] = useState<boolean>(true)
  return (
    <div className='bg-[#1b1b1b] text-white lg:px-14 pt-4'>
        <div className='hidden lg:flex  justify-center lg:justify-between text-white'>
      <form className='flex justify-center pt-2 mr-2'>
        <section>
            <div className='flex justify-end w-full'>
                <div className='border p-2 px-4 font-bold bg-blue-500 bg-opacity-30'>Limit</div>
                <div className='border p-2 font-bold bg-transparent'>Market</div>
            </div>
            <div className='mb-2'>
                <label htmlFor='price'>Price</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='quality'>Quality</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='total'>Total</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>
        <button type='button' className='w-full bg-green-500 p-2 font-bold'>Buy</button>
        </section>
    </form>

    <form className='flex justify-center pt-2'>
        <section className=''>
        <div className='flex justify-end w-full'>
                <div className='border p-2 px-4 font-bold bg-blue-500 bg-opacity-30'>Limit</div>
                <div className='border p-2 font-bold bg-transparent'>Market</div>
            </div>
            <div className='mb-2'>
                <label htmlFor='price'>Price</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='quality'>Quality</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='total'>Total</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.4rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>
        <button type='button' className='w-full bg-red-500 p-2 font-bold'>Sell</button>
        </section>
      </form>
      </div>

    <div className='flex lg:hidden'>
    <Swiper navigation={{ nextEl: '.sell', prevEl: '.buy'}} modules={[Navigation]} className="mySwiper">
    <div className='flex justify-between px-20 pt-6'>
        <div className='buy bg-green-500 content-center w-2/6 h-full p-4 text-white rounded-md flex justify-center '>Buy</div>
        <div className='sell bg-red-500 content-center w-2/6 h-full p-4 text-white rounded-md flex justify-center'>Sell</div>
    </div>
    <SwiperSlide>
    <form className='flex justify-center pt-2 mr-2'>
        <section>
            <div className='flex justify-end w-full'>
            {/* <nav className='flex lg:hidden w-full justify-end '>
          {TransType.map((link, i) => {
            return(
              <li key={i} className=' flex '>
                <div>
                  <div className={`border p-2 px-4 font-bold bg-opacity-30 w-20 flex justify-center ${select ?'bg-blue-500' : null}`} onClick={() => isSelected(!select)}>
                    <span>{link.label}</span>
                  </div>
                </div>
              </li>
            )
          })}
        </nav> */}
                <div className='border p-2 px-4 font-bold bg-blue-500 bg-opacity-30'>Limit</div>
                <div className={`border p-2 font-bold bg-transparent `}>Market</div>
            </div>
            <div className='mb-2'>
                <label htmlFor='price'>Price</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='quality'>Quality</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='total'>Total</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>
        <button type='button' className='w-full bg-green-500 p-2 font-bold'>Buy</button>
        </section>
    </form>
    </SwiperSlide>
    <SwiperSlide>
    <form className='flex justify-center pt-2'>
        <section className=''>
        <div className='flex justify-end w-full'>
                <div className='border p-2 px-4 font-bold bg-blue-500 bg-opacity-30'>Limit</div>
                <div className='border p-2 font-bold bg-transparent'>Market</div>
            </div>
            <div className='mb-2'>
                <label htmlFor='price'>Price</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='quality'>Quality</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>

        <div className='mb-2'>
                <label htmlFor='total'>Total</label>
        <div className='border border-blue-500  mb-4 rounded-l-md w-[22.5rem]'>
            <input type='number'  className='bg-transparent p-2 ' />
            <select className='bg-blue-500 bg-opacity-50 p-2 font-bold border-2 border-opacity-50 border-blue-500 rounded-l-md '>
                <option>HIVE</option>
                <option>AIRHAWK</option>
                <option>AFAM</option>
            </select>
        </div>
        </div>
        <button type='button' className='w-full bg-red-500 p-2 font-bold'>Sell</button>
        </section>
      </form>
    </SwiperSlide>
    
    </Swiper>

    </div>
</div>
  )
}

export default Page
