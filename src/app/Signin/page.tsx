'use client'
import React, { useState } from 'react';
import Button from '../ul/Button';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../ul/styles.css'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { Eye, EyeOff } from "lucide-react";



const Page = () => {
  const [showWorkPassword, setShowWorkPassword] = useState(false);
const toggleWorkIDVisibility = () => {
  setShowWorkPassword(!showWorkPassword);
};

const [step, setStep] = useState(1);

const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  if (step < 5) {
    setStep(step + 1);
  }
};


  
  return (
    <div className="flex min-h-screen flex-col bg-[#1B1B1B] text-white py-36 p-4 flex min-h-screen flex-col items-center justify-between boDy">
      <form className='w-[20rem] md:w-[25rem]'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-[2rem]'>Sign up</h1>
          <p>Create an account</p>
        </div>
        <div>
          Step {step}/5
          <div className='flex justify-items-stretch mt-2'>
            {[...Array(5)].map((_, index) => (
              <div key={index} className={`h-1 w-1/5 mr-1 ${index < step ? 'bg-red-500' : 'bg-white'}`}></div>
            ))}
          </div>
        </div>
        <div className='mt-10 mb-8 h-[20rem]'>
        <Swiper navigation={{ nextEl: '.button-next'}} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
              <div className="w-full text-start">
              <label htmlFor='username'>Create a Username:
              <input 
              className='w-full rounded-md bg-transparent border-2 h-10 mt-6 p-2'
                type="text"
                placeholder='Create a unique username' />
              </label>
              <div className='flex text-[.6rem] mt-2 w-full text-red-400'>
               By continuing you agree to Airhawks <a href={"#"} className='text-blue-500 underline flex'> Terms & Conditions</a> and <a href={"#"} className='text-blue-500 underline flex'>Privacy Policy</a>
              </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full text-start">
              <label htmlFor='username'>Your Lagal Name:
              <input 
              className='w-full rounded-md bg-transparent border-2 h-10 mt-6 p-2'
                type="text"
                placeholder='Full name' />
              </label>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full text-start">
              <label htmlFor='username'>Email:
              <input 
              className='w-full rounded-md bg-transparent border-2 h-10 mt-6 p-2'
                type="email"
                placeholder='address@example.com' />
              </label>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full text-start">
              <label htmlFor='username'>Phone Number:
              <input 
              className='w-full rounded-md bg-transparent border-2 h-10 mt-6 p-2'
                type="number"
                placeholder='Preferably your whatsapp line' />
              </label>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full text-start">
              <label htmlFor='password'>Create Password:
              <input 
              className='w-full rounded-md bg-transparent border-2 h-10 mt-6 p-2'
              type={`${showWorkPassword ? "text" : "password"}`}
                placeholder='' />
              </label>
              <span
                    onClick={toggleWorkIDVisibility}
                    className="absolute right-3 -translate-y-1/2  mt-[-.6rem] top-1/4 cursor-pointer"
                  >
                    {showWorkPassword ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </span>

              </div>
            </SwiperSlide>
            <div className=' second'>
            {step < 5 ? (
                <div className='swiper-button-next w-full text-center'>
                  <button
                    type="button"
                    className="button-next w-full text-center grid place-items-center py-1 px-1 rounded-md overflow-hidden"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
          ) : (
            <div className='block mt-[-12rem]'>
              <Button />
            </div>
          )}
          </div>
      </Swiper>
      <div className='text-center'>
      Alredy have an account? <Link href={'../Login'} className='font-bold text-blue-500 underline'>Login</Link>
      </div>
        </div>
        
      </form>
    </div>
  );
};

export default Page;
