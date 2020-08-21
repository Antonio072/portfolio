import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"



export default () => {
    const data = useStaticQuery(graphql`
    {
       workshopsJson {
         data {
           title
           location
           date
         }
       }
     }
    `)
     console.log(data.workshopsJson)
    return <Fragment>
        <h2 className="text-3xl font-bold text-center">Talleres que he impartido</h2>

        <div class="flex flex-wrap mx-4 ">
            {data.workshopsJson.data.map(workshop => (
                <div class="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded shadow-lg bg-white mx-5 my-3 px-5">
                    <h4 className="font-bold">{workshop.title}</h4>
                    <p className="text-secondary">{workshop.location}</p>
                    <p className="text-secondary">{workshop.date}</p>
                </div>
            ))
            }
        </div>
        
    </Fragment>
}
