import React from 'react'

const Description = ({ message }: { message: string }) => {
  return (
    <p className='text-[#4B5563] sm:text-left text-center font-medium text-lg'>
        { message }
    </p>
  )
}

export default Description
