import React from "react"
import Layout from "../components/Layout"
import Boy from '../components/Boy'
import data from '../data/test-good'

const GoodBoy = () => (
    <div>
        <Boy data={data}/>
    </div>
)

export default GoodBoy