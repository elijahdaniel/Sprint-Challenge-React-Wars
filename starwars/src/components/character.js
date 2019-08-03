import React from "react";

export default function Character(props) {
  return (
    <div>
      <h3 class='name'>{props.name}</h3>
      <p>Gender: {props.gender}</p>
      <p>{props.species}</p>
      <p>{props.birth_year}</p>
    </div>
  );
}
