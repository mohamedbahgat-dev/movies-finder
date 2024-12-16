import React from 'react'

function NavBar() {
  return (
    <>
      <div>
        <header>
            <nav>
              <div className='flex flex-wrap items-center justify-around mx-20 mt-20 mb-10 p-5 rounded-3xl shadow-md font-poppins bg-teal-300'>
                  <div>
                    <img className='w-32 ml-5' src="../src/assets/mania2.png"/>
                  </div>
                <ul className='flex flex-wrap'>
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