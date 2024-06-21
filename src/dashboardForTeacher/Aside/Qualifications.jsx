import React from 'react'
import Button from '../../components/Button'

const Qualifications = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4 mb-6'> Qualifiation </h1>

      <div className='flex flex-col gap-10 pl-10'>

        <div className='grid grid-cols-3 justify-between w-[80%]'>
          <label htmlFor="" className='font-bold'> Upload Your O'level result </label>
          <input type="file" src="" alt="" placeholder='' />
          <button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]'> Verified</button>
        </div>

        <div className='grid grid-cols-3  justify-between w-[80%]'>
          <label htmlFor="" className='font-bold' > Upload Your NCE/Bsc/MSc/PGDE </label>
          <input type="file" src="" alt="" placeholder='' />
          <button className='bg-red-800 text-white rounded-md py-2 px-4 w-[120px]'> Pending </button>
        </div>

        <div className='grid grid-cols-3  justify-between w-[80%]'>
          <label htmlFor=""className='font-bold' > Upload TRCN </label>
          <input type="file" src="" alt="" placeholder='' />
          <button className='bg-red-800 text-white rounded-md py-2 px-4 w-[120px]'> Pending </button>
        </div>

        <div className=' grid grid-cols-3  justify-between w-[80%]'>
          <label htmlFor="" className='font-bold'> Upload CV </label>
          <input type="file" src="" alt="" placeholder='' />
          
          <button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]'> Verified</button>
        </div>
      </div>

    </div>
  )
}

export default Qualifications