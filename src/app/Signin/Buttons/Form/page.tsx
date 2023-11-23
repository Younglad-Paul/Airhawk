import React from 'react'
import Button from '../Button'

const page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1B1B1B] text-white py-36 p-4 flex min-h-screen flex-col items-center justify-between">

      <form className='w-[18rem] md:w-[25rem]'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-[2rem]'>Sign up</h1>
          <p>Create an account</p>
      </div>
      <div>
        Step 1/5
        <div className='flex justify-items-stretch mt-2' >
          <div className=' h-1 bg-red-500 w-1/5 mr-1'></div>
          <div className=' h-1 bg-white w-1/5 mr-1'></div>
          <div className=' h-1 bg-white w-1/5 mr-1'></div>
          <div className=' h-1 bg-white w-1/5 mr-1'></div>
          <div className=' h-1 bg-white w-1/5 mr-1'></div>
        </div>
      </div>
        <div className='flex mt-10 mb-8'>
            <div className='w-full'>
            <label htmlFor='name' >Create a User Name</label>
            <input
            className='w-full h-10 p-2 bg-transparent border-2 border-white rounded-md mt-2'
            type='text'
            placeholder='The name you want other to see'
            ></input>
            </div>
            
        </div>
        <Button />
        
        
      </form>
    </div>
  )
}

export default page
