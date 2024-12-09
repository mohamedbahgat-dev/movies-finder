import React from 'react'

function SearchBar() {
  return (
    <div>
        <div className='bg-gray-100 ml-40 rounded-full'> 
            <form className='flex p-1'>
                <input className='w-72 mx-3 px-2 bg-gray-100 focus:outline-none placeholder:font-nunito'
                       type='text'
                       id='search-bar'
                       placeholder='Find....' />
                <button className=" mr-2" type='submit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ea5e9" class="size-9">
                             <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                             <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
                    </svg>

                </button>
            </form>
            
        </div>
    </div>
  )
}

export default SearchBar