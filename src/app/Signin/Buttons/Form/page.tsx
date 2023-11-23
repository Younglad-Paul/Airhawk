'use client'
import React, { useState } from 'react';
import Button from '../Button';

const Page = () => {
  const [step, setStep] = useState(1);

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    if (step < 5) {
      setStep(step + 1);
    }
  };
  

  return (
    <div className="flex min-h-screen flex-col bg-[#1B1B1B] text-white py-36 p-4 flex min-h-screen flex-col items-center justify-between">
      <form className='w-[18rem] md:w-[25rem]'>
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
        <div className='flex mt-10 mb-8'>
          <div className='w-full'>
            <label htmlFor='name'>Create a User Name</label>
            <input
              className='w-full h-10 p-2 bg-transparent border-2 border-white rounded-md mt-2'
              type='text'
              placeholder='The name you want others to see'
            />
          </div>
        </div>
        {step < 5 ? (
          <button
            type="button"
            className="button w-full text-center grid place-items-center py-1 px-1 rounded-md overflow-hidden"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <div className='block'>
            <Button />
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
