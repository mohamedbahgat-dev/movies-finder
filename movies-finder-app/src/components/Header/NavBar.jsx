import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function HomeNavBar() {

  return (

    <>
      <div>
        <header> 
            <nav>
              <div className='flex flex-wrap items-center justify-between bg-[#0e3359]  mr-[-5px] font-poppins p-3'>
                  
                  <Link to={'/'}>
                    <img className=' w-24 ml-20 max-[700px]:ml-44 max-[700px]:mb-5 bg-gradient-to-r from-cyan-500 to-blue-300  p-1 rounded-xl hover:cursor-pointer' 
                         src="src/assets/logomania.png" />                  
                  </Link>
           
                  <ul className='flex mr-20 max-[700px]:ml-20'>
                    <li>
                       <NavLink to='/'
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