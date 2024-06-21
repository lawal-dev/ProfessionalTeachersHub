import React from 'react'
import Button from '.././././../components/Button'
import { findAJob } from '../../contants'

const FindAJob = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4'> Find a Job </h1>
      <div className='grid grid-cols-6 ml-10 font-bold uppercase text-primary mb-6 gap-10 w-[90%]'>
        <h3>
          S/N
        </h3>
        <h3 className='col-span-2'>
          Name of Schools
        </h3>
        <h3>
          Role
        </h3>
        <h3>
          Salary
        </h3>
        <h3>

        </h3>
      </div>

      <div>
        {findAJob.map((job) => {
          return (
            <div key={job.id} className= {`grid grid-cols-6 ml-10 opacity-80 ${ job.color == true ? 'bg-secondary  text-white' : 'bg-gray-300 text-primary'} p-2 w-[90%] rounded-md gap-10 my-3`}>
              <p >
                {job.id}
              </p>
              <p className='col-span-2'>
                {job.school}
              </p>
              <p>
                {job.role}
              </p>
              <p>
                {job.salary}
              </p>
              <button className='bg-primary p-2 rounded-md font-medium text-white'> Apply </button>
            </div>
          )
        })}
      </div>


     
    </div>
  )
}

export default FindAJob