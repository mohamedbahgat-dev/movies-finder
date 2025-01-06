import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function TrendingCard(props) {

  // manage state for trend data card
  const [trend, setTrend] = useState('')

  // use sideeffect to settrend data 
  useEffect(()=>{
      setTrend(props.trend)        
  },[])

  //store current viewed movie in local storage to save the movie viewd page
    const handleClick = ()=> {
        localStorage.setItem('viewedMovie', JSON.stringify(trend))
    }

  return (

         <div>            
              <div>                {/* Main card contents */}
                <Link to={`/trendings/${trend.id}`}>        
                  <div className='mt-5 text-center' onClick={handleClick}>
                      <div div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-56 mt-16'>    
                        <img className='w-[350px] object-cover h-48 rounded-lg shadow-xl cursor-pointer'
                              src={`https://image.tmdb.org/t/p/w500${trend.backdrop_path}`}/>              
                      </div>
                      <span className='rounded-2x text-white drop-shadow-lg font-poppins font-semibold'>{trend.name || trend.title}</span>
                  </div>  
                </Link>   
              </div> 
        </div>
  )
}

export default TrendingCard;