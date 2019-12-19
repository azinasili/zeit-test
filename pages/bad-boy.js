import React from "react"
import Layout from "../components/Layout"
import Boy from '../components/Boy'
import fetch from 'isomorphic-unfetch'

const BadBoy = (props) => (
    <div>
        <Boy data={props.data}/>
    </div>
)

BadBoy.getInitialProps = async function() {
    const res = await fetch('https://s3-us-west-2.amazonaws.com/test-shoprunner/contentful/test-bad.json')
    const data = await res.json()
    console.log(`Bad boy fetched.`)
    return {
        data
    }
}

export default BadBoy