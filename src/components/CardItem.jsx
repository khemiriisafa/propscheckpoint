import React from "react";
import "../App.css";
function CardItem(props) {
  return (
    <div className="card-item">
      <h2>{props.name}</h2>
      <h4>{props.nationality}</h4>
      <img src={props.url} alt="" width="250" height="180" />
      <h4>{props.team}</h4>
      <h4>{props.age}</h4>
      <h4>{props.jersynumber}</h4>
    </div>
  );
}

export default CardItem;
