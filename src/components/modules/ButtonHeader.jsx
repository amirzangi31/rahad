import MassageIcon from '@/icons/MassageIcon'
import React from 'react'

const ButtonHeader = ({icon , color , name , count}) => {
  return (
    <div className='flex flex-col items-center justify-between text-sm'>
        <div className='w-[50px] h-[50px]  rounded-full flex justify-center items-center ' style={{background : color}}>
            {icon}
        </div>
        <span>
            {count}
        </span>
        <p className='text-center'>
            {name}
        </p>
    </div>
  )
}

export default ButtonHeader