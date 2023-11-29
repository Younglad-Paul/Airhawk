'use client'
import React from 'react'
import Image from 'next/image'
import Gmail from './ul/Email'
import Email from './ul/Gmail'
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <SessionProvider>
    <div className='h-[100svh] bg-[#1B1B1B] text-white py-36 p-4 flex min-h-screen flex-col items-center justify-between'>
      <section className='w-[18rem] md:w-[32rem]'>
        <div className='flex items-center'>
            <Image src="/Logo.jpg" alt="Logo" width={80} height={100} className='rounded-full' />
            <h1 className='font-bold text-[2rem] m-2'>Airhawk</h1>
        </div>
        <div className='mt-32 mb-10'>
            <h2 className='font-bold text-[1.5rem] mb-2'>Get Started on Airhawk Exchange</h2>
            <p className='text-[#F8FBF8]'>Easily manage your preferred crypto wallets all within one app.</p>
        </div>
        <div>
            <Email />
            <Gmail />
        </div>
      </section>
    </div>
    </SessionProvider>
    </main>
  )
}
