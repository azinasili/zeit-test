import React from 'react'
import Layout from "../components/Layout"
import fetch from "isomorphic-unfetch";

//Class Component for Next
class Post extends React.Component{

    static async getInitialProps(context) {
        const { id } = context.query
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
        const show = await res.json()

        console.log(`Fetched show: ${show.name}`)

        return { show }
    }

    render() {
        return (
            <div>
                <h1>{this.props.show.name}</h1>
                <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
                <img src={this.props.show.image.medium} />
            </div>
        )
    }
}

export default Post

