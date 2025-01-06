import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col h-[100px] backdrop-blur-sm bg-[#001f3f]'>
        <div className='flex justify-between items-center pt-5 mx-24'>
            <div className='ml-14 rounded-xl text-white mx-3 bg-gradient-to-r from-green-200 to-cyan-500'>
                <div className='mx-3'>Movie<span className='text-sm'>Mania</span></div> 
            </div>
            <div className='flex flex-col justify-center items-center text-gray-400'>
                <span className='p-1 rounded-xl mr-16 font-nunito text-lg font-semibold  max-[700px]:ml-8 '>Mohamed Bahgat</span>     
            </div>   
        </div>
        <span className='text-center text-sm text-gray-500 font-chivo max-[700px]:ml-12'>&copy;2025</span>
    </div>
  )
}

export default Footer