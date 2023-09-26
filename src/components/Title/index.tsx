import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <h3 className='text-[#2637F7] md:text-left text-center font-bold md:text-3xl text-3xl mb-4'>
      { text }
    </h3>
  )
}

export default Title
