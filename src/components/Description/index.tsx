import React from 'react'

const Description = ({ message }: { message: string }) => {
  return (
    <p className='text-[#4B5563] md:text-left text-center font-medium text-lg md:mb-0 mb-12'>
        { message }
    </p>
  )
}

export default Description
