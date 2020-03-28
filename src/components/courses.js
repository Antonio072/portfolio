import React, { Fragment } from "react"




export default (props) => (
    <Fragment>
        <h2 className="text-3xl font-bold text-center">Mis cursos</h2>

        <div className="container">
            {props.data.map(course => (
                <div className="my-5 shadow p-8 bg-white mr-4 rounded">
                    <h4 className="font-bold">{course.title}</h4>
                    <p className="text-center">
                        <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
                            Ver curso
                        </a>
                    </p>
                </div>
            ))
            }
        </div>
    </Fragment>
)