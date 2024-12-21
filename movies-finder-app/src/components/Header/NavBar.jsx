import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <>
      <div>
        <header>
            <nav>
              <div className='flex flex-wrap items-center justify-between  mb-10 p-3  shadow-md font-poppins bg-teal-500'>
                  <div>
                    <img className='w-32 ml-3 ' src="../src/assets/mania2.png"/>
                  </div>
               
                  <ul className='flex'>
                    <li>
                       <NavLink to='/'
                             className={({isActive})=>`mx-2 hover:text-teal-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Home
                      </NavLink>
                    </li>
                   <li>
                       <NavLink to='/trending'
                             className={({isActive})=>`mx-2 hover:text-teal-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Trending
                      </NavLink>
                    </li>
                    <li>
                       <NavLink to='/explore'
                             className={({isActive})=>`mx-2 hover:text-teal-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
                             Explore
                      </NavLink>
                    </li>
                    <li>
                       <NavLink to='/library'
                             className={({isActive})=>`mx-2 hover:text-teal-400 cursor-pointer ${isActive ? 'text-red-500': 'text-gray-200'}`}>
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

export default NavBar