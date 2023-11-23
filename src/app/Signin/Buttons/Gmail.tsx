import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";

const Gmail = () => {
  return (
    <div>
       <button
        type="button"
        className="w-full mt-4 border-white border-2 border-solid hover:border-blue-300 hover:shadow-xl transition-shadow duration-300 text-center grid place-items-center py-3 px-5 rounded-md"
      >
        <Link
          href={"#"}
          className="flex gap-x-6 items-center sm:text-lg text-sm"
        >
          <FcGoogle /> <span>Sign up with Google</span>
        </Link>
      </button>
    </div>
  )
}

export default Gmail
