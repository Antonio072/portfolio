import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaCalendarAlt, FaMapMarked } from 'react-icons/fa'


export default () => {
  const data = useStaticQuery(graphql`
    {
       workshopsJson {
         data {
           title
           location
           date
           imageURL
         }
       }
     }
    `)
  console.log(data.workshopsJson)
  return <Fragment>
    <h2 className="text-3xl font-bold text-center">Talleres que he impartido</h2>

    <div class="flex flex-wrap justify-center ">
      {data.workshopsJson.data.map(workshop => (
        <div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded shadow-lg bg-white mx-5 my-3 ">
          <div class="h-64 
                      flex-none  
                      rounded-t lg:rounded-t-none 
                      lg:rounded-l overflow-hidden" 
                      style={{ backgroundImage: workshop.imageURL, backgroundSize : 'cover', backgroundRepeat:"no-repeat" }} 
                      title="Worshop image"></div>
          <div className="px-5">
            <h2 className="text-2xl font-bold">{workshop.title}</h2>
            <p className="flex my-1 text-secondary text-1xl"><FaMapMarked className="my-1 mr-3" />{workshop.location}</p>
            <p className="flex my-1 text-secondary text-1xl"><FaCalendarAlt className="my-1 mr-3" />{workshop.date}</p>
          </div>
        </div>
      ))
      }
    </div>

  </Fragment>
}
