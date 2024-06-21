import React from 'react'
import { avatar2 } from '../assets/images'
import { FaSignOutAlt } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='relative'>
        <div className='bg-white p-2 flex flex-col rounded-lg cursor-pointer'>
            <div className='flex gap-1 items-center'>
                <h4 className='font-semibold text-md text-secondary'>Ishola Fareedah </h4>
                <img src={avatar2} alt=""  className='w-10 h-10 rounded-full'/>
            </div>
            <div className='flex gap-4 items-center'>
                <p  className='font-semibold text-md text-primary italic'> Id: 342324356 </p>
                <FaSignOutAlt />
            </div>
        </div>
    </div>
  )
}

export default Profile