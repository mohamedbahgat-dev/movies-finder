import React from 'react'
import { fetchTrendingDay, fetchTrendingWeek, fetchTrendingPersons} from '../../services/tmdbServices'
import { useState, useEffect, useRef } from 'react'
import TrendingAllCard from './TrendingAllCard'
import TrendingPersonCard from './TrendingPersonCard'

function TrendingAllCards() {

    const [trendingDay, setTrendingDay] = useState([])
    const [trendingWeek, setTrendingWeek] = useState([])
    const [trendingPerson, setTrendingPerson] = useState([])

    const [dayActive, setDayActive] = useState(true) 
    const [weekActive, setWeekActive] = useState(false) 
    const [personActive, setPersonActive] = useState(false) 

    const dayRef = useRef()
    const weekRef = useRef()
    const personRef = useRef()


    useEffect(()=> {
        getDayTrends()
        getWeekTrends()
        getTrendingPersons()
    },[])


    const getDayTrends = async () => {
        try {
          await fetchTrendingDay()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { setTrendingDay(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }


    const getWeekTrends = async () => {
        try {
          await fetchTrendingWeek()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { setTrendingWeek(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

      const getTrendingPersons = async () => {
        try {
          await fetchTrendingPersons()
               .then(response => {
                      if (!response.ok) {
                      useMessageStore.getState().setMessage('Movie not found', 'Error')
                   }
                      return response.json()
              }).then(data => { setTrendingPerson(data['results']) })       
    
        } catch (error) {
          useMessageStore.getState().setMessage('Movie not found', 'Error')
        }
      }

    const showDayTrends = ()=>{
      dayRef.current.className = 'flex gap-5 mx-5 mt-3  h-[310px] items-center flex-nowrap animate-fadeIn'
      weekRef.current.className = 'hidden'
      personRef.current.className = 'hidden'
      setDayActive(true)
      setWeekActive(false)
      setPersonActive(false)
    }


    const showWeekTrends = ()=> { 
      dayRef.current.className = 'hidden'
      weekRef.current.className = 'flex gap-5 mx-5 mt-3 h-[310px] items-center flex-nowrap animate-fadeIn'
      personRef.current.className = 'hidden'
      setDayActive(false)
      setWeekActive(true)
      setPersonActive(false)
    }

    const showPersonsTrends = ()=> { 
      dayRef.current.className = 'hidden'
      weekRef.current.className = 'hidden'
      personRef.current.className = 'flex gap-5 mx-5 mt-3 h-[310px] items-center flex-nowrap animate-fadeIn'
      setDayActive(false)
      setWeekActive(false)
      setPersonActive(true)

    }


  return (
    <div>
        <div>
              {/* section header */}
            <div className='flex mt-5'>
                 <span className='ml-[120px] font-poppins text-xl'>Trendings</span>
                 <div className=' flex items-center justify-between ml-8 w-72 text-base border-2 font-semibold rounded-3xl border-cyan-200'>
                    <button className= {`px-[18px] rounded-2xl ${dayActive ? ' text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showDayTrends}
                            >Today
                     
                    </button>
                    <button className={`px-[16px] rounded-2xl ${weekActive?  'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showWeekTrends}
                            >This Week
                    </button>
                    <button className={`px-[16px] rounded-2xl ${personActive?  'text-gray-800 bg-gradient-to-r from-sky-100 to-cyan-500 transition-all duration-500': ''}` }
                            onClick={showPersonsTrends}
                            >People
                    </button>
                </div>    
            </div>

            {/* cards area start */}
            <div className='w-full h-[360px] items-center overflow-x-scroll border-x-[50px] border-x-transparent'>
                <div className='flex gap-5 mx-5 items-center h-[350px] flex-nowrap' ref={dayRef}>
                    {trendingDay.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <TrendingAllCard movie={movie} />
                            </div>                           
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={weekRef}>
                    {trendingWeek.map((movie)=> (
                        <div key={movie.id}>
                            <div>
                                 <TrendingAllCard movie={movie} />
                            </div>               
                        </div>
                    ))}
                </div>
                <div className='hidden gap-5 mx-5 items-center h-[310px] flex-nowrap' ref={personRef}>
                    {trendingPerson.map((person)=> (
                        <div key={person.id}>
                            <div>
                                 <TrendingPersonCard person={person} />
                            </div>               
                        </div>
                    ))}
                </div>
            </div>
        </div>


    </div>
  )
}

export default TrendingAllCards