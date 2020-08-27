import React from "react"
import Header from "../components/header"
import Repos from '../components/repos'
import Workshops from '../components/workshops'
import Skills from '../components/skills'
import Education from '../components/education'
import Projects from '../components/projects'
      
    
export default () => <div >
    <Header />
    <Education/>
    <Skills/>
    <Projects/>
    {/* <Codigofacilito/> */}
    <Workshops/>
    <Repos />
</div>
