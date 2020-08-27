import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"



export default () => {

    const data = useStaticQuery(graphql`
    {
       projectsJson {
        projects{
            title
            description
            imageURL
        }
    }
     }
    `)

    return <Fragment>
        <div class="flex flex-wrap justify-center">
            <h2 className="text-3xl font-bold  w-full text-center">Proyectos</h2>

            <div class="flex content-center  xs:w-1/1 md:w-1/2 flex-wrap mx-4">
                {data.projectsJson.projects.map(project => (
                    <div class="max-w-sm min-w-full lg:max-w-full lg:flex my-4">
                        <div class="h-48 lg:h-48 lg:w-48 flex-none bg-fill rounded-t bg-cover lg:rounded-t-none lg:rounded-l overflow-hidden" style={{backgroundImage: project.imageURL}} title="Project image">
                        </div>
                        <div class="border-r border-b  
                                w-full
                                border-gray-900 lg:border-l-0 
                                lg:border-gray-900 
                                bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between ">

                            <div class="text-gray-900 font-bold text-xl mb-2">{project.title}</div>
                            <p class="text-gray-700 text-base mt-2 text-center">{project.description}</p>

                            {/* <div className="mt-2 text-center">
                            <a href="/cuando-vaya-a" className="btn" target="_blank" rel="noopener  noreferrer">
                                Ver proyecto
                            </a>
                        </div> */}

                        </div>
                    </div>
                ))
                }
            </div>
        </div>

    </Fragment>
}
