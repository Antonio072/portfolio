import React, { Fragment } from "react"




export default (props) => (
    <Fragment>
        <h2 className="text-3xl font-bold text-center">Mis certificados en Codigo Facilito</h2>

        <div className="flex">
            {props.data.map(certificate => (
                <div className="shadow p-8 bg-white mr-4">
                    <h4 className="font-bold">{certificate.title}</h4>
                    <p className="text-center">
                        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">
                            Calificacion {certificate.score}
                        </span>
                    </p>
                </div>
            ))
            }
        </div>
    </Fragment>
)