import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import MenuItem from './MenuItem'

const Header = () => {

  const menu =[
    {
      name:'About',
      url:'/About'
    },
    {
      name:'Sing In',
      url:'/login'
    }
  ]


  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg '>
        <input placeholder="arama yapınız" className='outline-none flex-1 ' type="text" />
        <BiSearchAlt size={25 }/>
      </div>
      {
        menu.map((mn, i ) =>(
          <MenuItem mn={mn} key={i} />
        ))
      }
    </div>
  )
}

export default Header
