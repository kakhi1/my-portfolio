import React from 'react'

const SideNavTitle = ({title,subTitle}) => {
  return (
    <div>
      <h1 className='font-titleFont text-xl font-semibold text-zinc-100 tracking-wide
      relative pb-4 mt-6 border-b-[1px] border-b-zinc-500 '>
        <span className='text-designColor'>{title}</span>
        {subTitle}
        <span className='w-8 h-8   bg-gradient-to-t text-designColor to-gray-600 inline-block
        rounded-full absolute -left-3 top-0 opacity-10 z-10'></span>
        </h1>
    </div>

  )
}

export default SideNavTitle
