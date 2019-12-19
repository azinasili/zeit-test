import React from "react"
import PostLink from "../components/PostLink";
import fetch from 'isomorphic-unfetch'


//Function Component
const Index = (props) => (
    <div>
        <h1>Batman Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <PostLink show={show} />
                </li>
            ))}
        </ul>
        <h1>{process.env.API_URL}</h1>
    </div>
)


Index.getInitialProps = async function(ctx) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    //const page = "/LearnMore"
    //ctx.res.redirect(page)
    console.log(`Show data fetched. Count: ${data.length}`)
    return {
        shows: data.map(entry => entry.show)
    }
}


export default Index