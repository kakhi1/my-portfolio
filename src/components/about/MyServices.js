import React from 'react'
import ServicesCard from './ServicesCard'
import {BiCodeAlt} from "react-icons/bi"
import {SiAntdesign} from "react-icons/si"
import {AiTwotoneAppstore} from "react-icons/ai"

const MyServices = () => {
  return (
    <div className='grid grid-cols-2'>
      <ServicesCard 
       icons={<SiAntdesign/>}
       title="Web Design"
       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      /> 
      <ServicesCard 
       icons={<BiCodeAlt/>}
       title="Web Development"
       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      /> 
      <ServicesCard 
       icons={<AiTwotoneAppstore/>}
       title="Mobile Application "
       subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      /> 
    </div>
  )
}

export default MyServices
