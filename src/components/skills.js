import React, { Fragment } from "react"


import {
    SiDocker, SiReact, SiHtml5, SiCss3,
    SiNodeDotJs, SiPhp, 
    SiMysql, SiMicrosoftsqlserver, SiMongodb,
    SiJava, SiJavascript, SiPython, SiDart,
    SiGit
} from 'react-icons/si';

import {SiFlutter, SiVueDotJs, SiCplusplus, SiKubernetes, SiFigma, SiVisualstudiocode, SiVagrant} from 'react-icons/si'
import { IconContext } from "react-icons";


export default () => {

    const data = {
        skills: [
            {
                "title": "FrontEnd",
                "elements": [
                    { "name": "React", "icon": <SiReact style={{ color: "#61DAFB" }} /> },
                    { "name": "Vue", "icon": <SiVueDotJs style={{color:'#4FC08D'}}/> },
                    { "name": "Flutter", "icon": <SiFlutter style={{size:'100px',color:'#02569B'}}/> },
                    { "name": "HTML", "icon": <SiHtml5 style={{color:'#E34F26'}}/> },
                    { "name": "CSS", "icon": <SiCss3 style={{color:'#1572B6'}}/> },
                ]
            }
            ,
            {
                "title": "Backend",
                "elements": [
                    { "name": "NodeJS", "icon": <SiNodeDotJs style={{color:'#339933'}}/> },
                    { "name": "PHP", "icon": <SiPhp style={{color:"#777BB4"}} /> },
                ]
            },
            {
                "title": "Bases de datos",
                "elements": [
                    { "name": "MySQL", "icon": <SiMysql style={{color: '#4479A1'}}/> },
                    { "name": "MongoDB", "icon": <SiMongodb style={{color: '#47A248'}}/> },
                    { "name": "MSSQL", "icon": <SiMicrosoftsqlserver style={{color: '#CC2927'}}/> },
                    { "name": "Oracle", "icon": <SiDocker style={{color: '#2496ED'}}/> },
                ]
            },
            {
                "title": "Lenguajes de programación",
                "elements": [
                    { "name": "JavaScript", "icon": <SiJavascript style={{color: '#F7DF1E'}}/> },
                    { "name": "Java", "icon": <SiJava style={{color: '#007396'}}/> },
                    { "name": "Python", "icon": <SiPython style={{color: '#3776AB'}}/> },
                    { "name": "C++", "icon": <SiCplusplus style={{color: '#00599C'}}/> },
                    { "name": "Dart", "icon": <SiDart style={{color: '#0175C2'}}/> },
                    { "name": "PHP", "icon": <SiPhp style={{color: '#777BB4'}}/> }
                ]
            },
            {
                "title": "Herramientas",
                "elements": [
                    { "name": "Git", "icon": <SiGit style={{color: '#F05032'}}/> },
                    { "name": "Docker", "icon": <SiDocker style={{color: '#2496ED'}}/> },
                    { "name": "Vagrant", "icon": <SiVagrant style={{color: '#1563FF'}}/> },
                    { "name": "Kubernetes", "icon": <SiKubernetes style={{color: '#326CE5'}}/> },
                    { "name": "Figma", "icon": <SiFigma style={{color: '#F24E1E'}}/> },
                    { "name": "VS Code", "icon": <SiVisualstudiocode style={{ color: '#007ACC' }} /> }
                ]
            }
        ]
    }
    return <Fragment>
        <header className="bg-gray-200 flex flex-wrap justify-center">

            <h2 className="text-3xl font-bold w-full text-center">Habilidades</h2>

            <div class="flex flex-wrap xs:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 justify-center mx-4 ">
                {data.skills.map(skill => (
                    <div class="w-full rounded shadow-lg bg-white mx-5 my-3 px-5">
                        <h4 className="font-bold">{skill.title}</h4>

                        <div class="flex flex-wrap w-1/1 justify-center">
                            {skill.elements.map(element => (
                                <IconContext.Provider   value={{ size: "100px", className: 'react-icons' }}>
                                        <div class="md:w-1/6 px-2 lg:w/1-6 my-3 flex flex-wrap justify-center">

                                        {element.icon}
                                        </div>
                                    
                                </IconContext.Provider>



                            ))}
                        </div>
                    </div>
                ))
                }

            </div>

        </header>
    </Fragment >
}
