import React from 'react'

const imageStyle = {
    width: 150,
    height: 150
}

const Boy = props => (
   <div>
       <h1>{props.data.title}</h1>
       <h4>{props.data.age}</h4>
       <p>{props.data.description}</p>
       <img src={props.data.title === 'good' ? 'http://placekitten.com/g/600/600' : 'https://www.placecage.com/c/600/600'} style={imageStyle}/>
   </div>
)

export default Boy
