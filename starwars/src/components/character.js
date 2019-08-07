import React from "react";

const CardStyle = {
  background: "white",
  margin: "20px",
  width: "300px",
  textAlign: "center",
  fontSize: "0.9rem",
  borderRadius: "15px",
  boxShadow: "0px 5px 10px -5px #000",
  textTransform: "capitalize"
};

export default function Character(props) {
  return (
    <div style={CardStyle}>
      <h3>{props.name}</h3>
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
