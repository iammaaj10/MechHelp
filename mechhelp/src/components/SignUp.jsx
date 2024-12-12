import React from 'react'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center h-screen hidden'>
    <div className='w-96 p-6 border rounded-md bg-white'>
        <form action="">
        <div className='p-3 flex flex-col gap-4'>
            <div className='text-center'>
              <h1 className='text-black font-bold font-poppins text-2xl'>
                Sign Up 
              </h1>
            </div>

            
            <input
              type='text'
              placeholder='Enter the username'
              className='text-black bg-slate-100 p-3 rounded-md'
               required
            />

            
            <input
              type='email'
              placeholder='Enter the Email-Id'
              className='text-black bg-slate-100 p-3 rounded-md'
             
              required
            />

            
            <input
              type='number'
              placeholder='Enter the phone number'
              className='text-black bg-slate-100 p-3 rounded-md'
              
              required
            />

            
            <input
              type='password'
              placeholder='Enter the password'
              className='text-black bg-slate-100 p-3 rounded-md'
              
              required
            />
          </div>

          
          <div className='text-center'>
            <button className='bg-blue-700 rounded-3xl p-2 m-3 w-28 font-semibold text-white hover:bg-orange-500 hover:text-black cursor-pointer'>
              Sign Up
            </button>
          </div>
        </form>
    </div>
</div>

  )
}

export default SignUp
