import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Email = () => {
  return (
    <div>
      <button
        type="button"
        className="button w-full text-center grid place-items-center py-3 px-5 rounded-md overflow-hidden mt-6"
      >
        <Link
          href={"../Signin"}
          className="flex gap-x-6 items-center sm:text-lg text-sm"
        >
          <Mail /> <span>Sign up using Mail</span>
        </Link>
      </button>
    </div>
  );
};

export default Email;
