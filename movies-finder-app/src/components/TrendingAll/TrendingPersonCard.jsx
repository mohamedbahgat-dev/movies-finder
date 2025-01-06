import { useEffect, useState, useRef } from "react"


function TrendingPersonCard(props) {

    const [person, setPerson] = useState('')

    useEffect(()=> {
        setPerson(props.person)
    })

  return (
    <div>
        <div className="flex felx-col items-center w-44 mt-5 relative">
            <div className="drop-shadow-lg hover:shadow-xl" >
                <img className="w-40 rounded-lg drop-shadow-lg" src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                     onError={(e)=> {e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500' }}/>            
            </div>           
        </div>

        <div className="flex flex-col h-12 mt-3 text-center ">
            <span className="text-center font-poppins text-sm">{person.original_name}</span>
            <span>{person.known_for_department}</span>
        </div>
       

    </div>
  )
}

export default TrendingPersonCard