import React from 'react'
import { NavLink } from 'react-router-dom'

function FeatureMoviesHeader() {

  return (
    <>
      <div>
            <span className='inline-block ml-32 font-poppins text-xl font-semibold pb-2 bottom-5'>Featured Movies</span>
            <div className='inline-block text-center border-2 border-gray-950 ml-8 rounded-2xl'>

                <NavLink to={''}
                         className={({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer ${isActive && 'bg-blue-950 text-white transition-all duration-500' }`}>
                        All Times
                </NavLink>

                <NavLink to={'/2023'}
                         className= {({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer  ${isActive && 'bg-blue-950 text-white transition-all duration-500'}`}>
                        2023              
                </NavLink>
               
            </div>
     </div>
    
    </>
    
  )
}

export default FeatureMoviesHeader