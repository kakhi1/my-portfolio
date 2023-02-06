import React from 'react'
import SideNavTitle from './SideNavTitle'

const Sidenav = () => {
  return (
    <div className='px-7 py-4'>
      <SideNavTitle title="M" subTitle="enu"/>
      <ul>
        <li className='sidenavLi'>Portfolio Page</li>
        <SideNavTitle title="P" subTitle="rojects"/>
        <li className='sidenavLi'>E-commerce Angular</li>



      </ul>
    </div>
  )
}

export default Sidenav
