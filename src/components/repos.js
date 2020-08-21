import React, { useEffect, useState } from "react"
import Repo from './repo'

export default () => {

    const [repos, setRepos] = useState([])
    const [reposCount, setReposCount] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem("repos")
        let myRepos
        if (data) {
            myRepos = JSON.parse(data)
            // myRepos = myRepos.slice(1,10)
            setReposCount(myRepos.length)

            return setRepos(myRepos)
        }

        // async function fetchData() {
        //     // You can await here
        //     myRepos = await fetchRepos()
        //     sessionStorage.setItem("repos", JSON.stringify(myRepos))
        //     setReposCount(myRepos.length)
        //     setRepos(myRepos)
        // }
        // fetchData();
    }, [])

    return (<div className="max-w-4xl mx-auto ">
        <div className="header text-center mx-auto my-12">
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
        <div className="mt-2 text-center">
            <a href="https://github.com/antonio072" className="btn" target="_blank" rel="noopener  noreferrer">
                Ver más en GitHub ({reposCount})
            </a>
        </div>
    </div>
    )
}
