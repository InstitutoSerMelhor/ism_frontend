import React from 'react'

const Title = ({ text }: { text: string }) => {
  return (
    <h3 className='text-[#2637F7] sm:text-left text-center font-bold text-3xl mb-4'>
      { text }
    </h3>
  )
}

export default Title
