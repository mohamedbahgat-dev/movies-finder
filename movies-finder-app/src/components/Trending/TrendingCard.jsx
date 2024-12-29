import { useState, useEffect } from 'react'


function TrendingCard(props) {

  const [trend, setTrend] = useState('')
  
  useEffect(()=>{
    
      setTrend(props.trend)
          
  },[])

  return (
    <div >
        <div className='flex flex-col rounded-2xl flex-nowrap justify-center items-center w-[350px] h-64 mt-10 mb-3 hover:scale-105'>    
          <img className='w-[350px] object-cover h-48 rounded-lg shadow-xl cursor-pointer'
                src={`https://image.tmdb.org/t/p/w500${trend.backdrop_path}`}  
                />
          <span className='text-center  rounded-2x text-white drop-shadow-lg font-nunito font-semibold mt-2'>{trend.name || trend.title}</span>              
        </div>
    </div>
  )
}

export default TrendingCard;