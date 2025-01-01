import React from 'react'
import { NavLink } from 'react-router-dom'

function FeatureMoviesHeader() {

  return (
    <>
      <div>
            <span className='inline-block ml-[120px] font-poppins text-xl mb-3 bottom-5'>Featured Movies</span>
            <div className='inline-block text-center border-2 border-cyan-200 ml-8 rounded-2xl'>

                <NavLink to={''}
                         className={({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer ${isActive && ' text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500' }`}>
                        All Times
                </NavLink>

                <NavLink to={'/2023'}
                         className= {({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer  ${isActive && 'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500'}`}>
                        2023              
                </NavLink>
               
            </div>
     </div>
    
    </>
    
  )
}

export default FeatureMoviesHeader