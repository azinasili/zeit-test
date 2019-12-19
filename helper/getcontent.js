//import fs from 'fs'
//import path from 'path'
//import { createClient } from 'contentful'

const fs = require('fs')
const path = require('path')
const contentful = require('contentful')
require('dotenv').config();

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN
})

const types = [
    'test'
]

const getcontent = async () => {
    console.log('> Starting import...')
    for (const type of types) {
        console.log('> Getting content for', type)
        const entries = await client.getEntries({
            content_type: type
        })
        entries.items.forEach(function (entry) {
            const { sys, fields } = entry
            fs.writeFileSync(
                path.join(__dirname, '..', 'data', `${type}-${fields.title}.json`),
                JSON.stringify(fields)
            )
            console.log('> Content gotten and written for', type)
        })
    }
    return true
}

if (process.argv[2] === 'install') {
    getcontent()
}