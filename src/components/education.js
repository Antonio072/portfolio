import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"


export default () => {

    const data = useStaticQuery(graphql`
    {
        educationJson(slug: {eq: "presential"}) {
            title
            description
            items {
              name
              url
              img
              degree
              score
            }
          }
     }
    `)


    return <Fragment>
        <div className="container mx-auto p-12 max-w-4xl ">

            <h2 className="text-3xl font-bold text-center">Educación</h2>

            <div class="flex flex-wrap mx-4 ">
                <p class="mt-2 text-gray-600">
                    Actualmente estudio Ingenieria en Sistemas Computacionales en el
                    Tecnológico Nacional de México en Celaya
            </p>
                <p class="mt-2 text-gray-600">
                    También realicé un intercambio estudiantil en 2020-1 en la Universidad Autónoma
                    de Occidente en donde estudié Ingenierí Informática en Cali, Colombia
            </p>
                {/* {data.educationJson.items.map(item => (
                    // <div class="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 rounded shadow-lg bg-white mx-5 my-3 px-5">
                <li>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-secondary">{item.degree}</p>
                
                </li>
                
                // </div>
                ))
            } */}
            </div>
        </div>
    </Fragment>
}
