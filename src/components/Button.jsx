import React from 'react'

const Button = ({content}) => {
  return (
    <div>
      <button className='bg-secondary text-white py-2 md:px-4 max-md:px-2 rounded-md'>
        {content}
      </button>
    </div>
  )
}

export default Button