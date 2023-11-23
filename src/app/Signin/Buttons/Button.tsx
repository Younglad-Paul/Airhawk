import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Button = () => {
    
  return (
    <div>
      <button
        type="button"
        className="button w-full text-center grid place-items-center py-1 px-1 rounded-md overflow-hidden"
        // onClick={Swipe()}
      >
        <Link
          href={""}
          className="flex items-center sm:text-lg text-sm"
        >
          <p>Submit</p>
        </Link>
      </button>
    </div>
  );
};

export default Button;
