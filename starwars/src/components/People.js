import React from 'react'
import Cards from './Cards'
import './StarWars.css'

const People = props => {
  return (
    <div className='cards-container'>
      {props.data.map(x => (
        <Cards data={x} />
      ))}
    </div>
  )
}

export default People
