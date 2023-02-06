import React from 'react'

const RoundTwo = () => {
  return (
    <div className='w-[500px] h-[500px] rounded-full absolute bottom-0 right-32'>
       <div className='w-96 h-96 relative top-0 -left-10 animate-spin-slow'>
          <div className='w-53 h-52 rounded-full  bg-designColor absolute top-0 blur-2xl'></div>
          <div className='w-24 h-24 rounded-full  bg-green-600  absolute -bottom-10 left-16 blur-xl'></div>
          <div className='w-28 h-28 rounded-full  bg-designColor absolute top-32 -right-10  blur-2xl'></div>
        </div>
      
    </div>
  )
}

export default RoundTwo
