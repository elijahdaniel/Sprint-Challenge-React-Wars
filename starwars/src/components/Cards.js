import React from 'react'

const Cards = props => {
  return (
    <div className='cards'>
      <h3>{props.data.name}</h3>
      <p>
        <b>Height:</b> <span>{props.data.height}</span>
      </p>
      <p>
        <b>Mass:</b> <span>{props.data.mass}</span>
      </p>
      <p>
        <b>Hair Color:</b> <span>{props.data.hair_color}</span>
      </p>
      <p>
        <b>Skin Color:</b> <span>{props.data.skin_color}</span>
      </p>
      <p>
        <b>Eye Color:</b> <span>{props.data.eye_color}</span>
      </p>
      <p>
        <b>Year of Birth:</b> <span>{props.data.birth_year}</span>
      </p>
      <p>
        <b>Gender:</b> <span>{props.data.gender}</span>
      </p>
    </div>
  )
}

export default Cards
