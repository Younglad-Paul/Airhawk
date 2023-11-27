'use client'
import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn } from 'next-auth/react';

const Gmail = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn('google');
  };
  

  return (
    <div>
       <button onClick={handleSignIn}
        type="button"
        className="w-full mt-4 border-white border-2 border-solid hover:border-blue-300 hover:shadow-xl transition-shadow duration-300 text-center grid place-items-center py-3 px-5 rounded-md"
      >
        <div className="flex gap-x-6 items-center sm:text-lg text-sm">
          <FcGoogle /> <span>Sign up with Google</span>
          </div>
      </button>
    </div>
  )
}

export default Gmail
