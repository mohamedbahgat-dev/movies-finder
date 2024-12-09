import React from 'react'
import SearchBar from './SearchBar'


function NavBar() {
  return (
    <>
      <div>
        <header>
            <nav>
              <div className='flex justify-between items-center m-20 p-5 rounded-3xl shadow-md font-poppins bg-teal-300'>
                  <div>
                    <img className='w-32 ml-5' src="../src/assets/mania2.png"/>
                </div>
                <div>
                    <SearchBar />
                </div>
                <ul className='flex'>
                    <li className='mx-5 hover:text-sky-800 cursor-pointer'>Home</li>
                    <li className='mx-5 hover:text-sky-800 cursor-pointer'>Trending</li>
                    <li className='mx-5  hover:text-sky-800 cursor-pointer'>Explore</li>
                    <li className='mx-5  hover:text-sky-800 cursor-pointer'>MyLibrary</li>
                </ul>
              </div>
            </nav>
        </header>
      </div>
    </>
  )
}

export default NavBar