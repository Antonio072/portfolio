import React from "react"
import illustration from '../imgs/undraw_code_thinking_1jeh.svg'
import Form from "./contact.form"

export default () => (
    <header className="bg-gray-300 ">
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-2">
                    <h1 className="text-6xl font-bold text-purple-700">¡Hola! mi nombre es Antonio</h1>
                    <p className="text-xl font-light ">Me gusta crear cosas y enseñar lo que me gusta</p>
                </div>
                <img className="flex" src={illustration} alt="Profile"></img>
            </div>
        <Form/>
        </div>
    </header>
)