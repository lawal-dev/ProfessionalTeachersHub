import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <h1 className='font-bold  pl-20 text-xl text-primary pt-8'>Profile Page </h1>
       <form action="" className='m-auto pl-20 py-4 flex flex-col gap-6 opacity-80'>
        
        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> UserId</label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='9292929292992'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> School Name </label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='Unilorin Secondary School'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> Email</label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='unilorinsecondary@gmail.com'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'>Local Govt. </label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='Ilorin South'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> State </label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='Kwara'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> Country </label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='Nigeria'/>
        </div>

        <div className='flex items-center gap-3'>
          <label htmlFor="" className='font-semibold w-[5%]'> Address </label>
          <input type="text" className='w-[50%] p-2 bg-gray-800 text-white placeholder:text-white rounded-md'  disabled placeholder='No 2 opposite canogo hostel, oke odo, Ilorin'/>
        </div>

       </form>
    </div>
  )
}

export default ProfilePage