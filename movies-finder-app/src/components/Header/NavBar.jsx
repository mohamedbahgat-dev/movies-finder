import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function HomeNavBar() {

  return (

    <>
      <div>
        <header className='nav-backdrop relative'>
            <nav className='absolute top-8 left-10 z-30 w-[94%]'>
              <div className='flex flex-wrap items-center shadow-md font-poppins p-3 backdrop-blur-sm bg-white/30  rounded-xl '>
                  
                  <Link to={'/'}>
                    <img className=' w-24 ml-10 bg-gradient-to-r from-cyan-500 to-blue-300  p-1 rounded-xl hover:cursor-pointer' 
                         src="../src/assets/logomania.png" />                  
                  </Link>
           
                  <ul className='flex ml-5'>
                    <li>
                       <NavLink to=''
                             className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Home
                      </NavLink>
                    </li>
                   <li>
                       <NavLink to='/trending'
                             className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Trending
                      </NavLink>
                    </li>
                    <li>
                       <NavLink to='/explore'
                             className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Explore
                      </NavLink>
                    </li>
                    <li>
                       <NavLink to='/library'
                             className={({isActive})=>`mx-2 hover:text-sky-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Library
                      </NavLink>
                    </li>
                  </ul>
                  
             </div>
            </nav>
        </header>
      </div>
    </>
  )
}

export default HomeNavBar