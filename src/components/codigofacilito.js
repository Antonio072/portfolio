import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Courses from "./courses"

export default () => {
    const data = useStaticQuery(graphql`
     {
        codigofacilitoJson {
          data {
            courses {
              title
              url
            }
            certificates {
              code
              title
              score
            }
            username
          }
        }
      }
     `)
    console.log(data);

    return <section>
        <div className="mt-24">
            <div className="max-w-4xl mx-auto">

                <Posts data={data.codigofacilitoJson.data.certificates}/>
                   
                <Courses data={data.codigofacilitoJson.data.courses}/>
              
            </div>
        </div>
    </section>
}