'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import Sidebar from './components/Sidebar/page'
import Header from './components/Header/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
    <SessionProvider>
    <Sidebar />
    <Header />
    </SessionProvider>
    </main>
  )
}
