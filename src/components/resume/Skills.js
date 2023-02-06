import React from 'react'
import ResumeTitle from './ResumeTitle'
import {SiArtstation} from 'react-icons/si'
import {FaFlag} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
const Skills = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6 '>
      <div className='col-span-4'>
        <ResumeTitle title="Design" icon={<SiArtstation/>}/>
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Web development</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Mobile Application </p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[80%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Web Design</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[79%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-4'>
      <ResumeTitle title="Languages" icon={<FaFlag/>}/>
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Georgian</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[100%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>English</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[60%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Russian</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[60%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div className='col-span-4'>
        <ResumeTitle title="Coding" icon={<BiCodeAlt/>}/>
        <div className='py-4'>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Javascript</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[90%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Reactjs </p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[85%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>Angular</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[65%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
            <div className='py-3 border-b-[1px] border-zinc-800'>
            <p className='text-base text-textColor -mb-1.5'>C#</p>
            <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
               <span className='w-[70%] h-full absolute top-0 left-0 bg-designColor'></span>
            </span>
          </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'>
        </span>
        </div>     
    </div>
  )
}

export default Skills
