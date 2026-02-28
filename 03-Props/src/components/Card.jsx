import React from 'react'

const Card = (props) => {
  return (
       <div className='card'>
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <p>{props.p}</p>
        <button>{props.btn}</button>

      </div>
  )
}

export default Card