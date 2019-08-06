import React from "react";

export default function Character(props) {
  return (
    <div className="character">
      <h3 className="name">{props.name}</h3>
      <p>
        <b>Height:</b> {props.height}
      </p>
      <p>
        <b>Mass:</b> {props.mass}
      </p>
      <p>
        <b>Hair Color:</b> {props.hair_color}
      </p>
      <p>
        <b>Skin Color:</b> {props.skin_color}
      </p>
      <p>
        <b>Eye Color:</b> {props.eye_color}
      </p>
      <p>
        <b>Year of Birth:</b> {props.birth_year}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
    </div>
  );
}
