import React from 'react'
import icon_person from '../../assets/icon_person.svg'
import Image from 'next/image'

const PersonCircle = ({ membersName }: { membersName: string }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-blue-600 rounded-full w-40 h-40'>
      <Image
        src={icon_person}
        objectPosition='contained'
        width={50}
        height={50}
        alt='ícone de pessoa'
      />
      <small className='text-white'>
        {membersName}
      </small>
    </div>
  )
}

export default PersonCircle