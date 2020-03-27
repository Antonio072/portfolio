import React, { useEffect, useState } from "react"
import Repo from './repo'
import fetchRepos from "../libs/fetchRepos"

export default () =>{
    const [repos, setRepos] = useState([])

    useEffect(()=> {
        
        async function fetchData() {
            // You can await here
            let myRepos = await fetchRepos()
            setRepos(myRepos)
            // ...
          }
          fetchData();
    },[])
    
    return (<div className="max-w-4xl mx-auto ">
        <div className="header text-center">
            <h2 className="text-3xl font-bold">Some of my projects</h2>
            <p>Here you have some projects where I have worked</p>
        </div>
        <ul className="repos-list">
            {

                repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
    </div>
)}
