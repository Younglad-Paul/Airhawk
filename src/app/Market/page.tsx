'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import Sidebar from './components/Sidebar/page';
import SidebarResponsive from './components/Sidebar/SidebarResponsive';
import Sidebar2 from './components/Sidebar2/page'
import DataChart from './components/Chart/DataChart';
import Trade from './components/Trade/page'
import MarketBodycon from '../defaults/MarketBodyCon'

export default function Home() {
  
  return (
    <>
    <SessionProvider>
      <MarketBodycon>
      {/* <div className='grid grid-cols-[250px_minmax(900px,_1fr)_260px] mt-28 z-[0]'> */}
      <div className='id lg:flex mt-28'>
      <Sidebar />
      <div>
      <DataChart />
      <Trade />
      </div>
      <SidebarResponsive />
    <Sidebar2 />
    </div>
    </MarketBodycon>
    </SessionProvider>
    </>
  )
}
