import { NavLink } from 'react-router-dom'


function TtrendingCardsHeader() {
  return (
    <div>
        <div>
            <span className='inline-block ml-24 font-nunito text-xl font-semibold   pb-2 bottom-5'>Trending</span>
            <div className='inline-block text-center border-2 border-gray-950 ml-8 rounded-2xl'>

                <NavLink to={'/posters'}
                         className={({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer ${isActive && 'bg-blue-950 text-white transition-all duration-500' }`}>
                        Posters
                </NavLink>

                <NavLink to={'/trailers'}
                         className= {({isActive})=> `px-3 py-1 rounded-2xl hover:cursor-pointer  ${isActive && 'bg-blue-950 text-white transition-all duration-500'}`}>
                        Trailers              
                </NavLink>
               
            </div>          
      </div>
     
    </div>
  )
}

export default TtrendingCardsHeader