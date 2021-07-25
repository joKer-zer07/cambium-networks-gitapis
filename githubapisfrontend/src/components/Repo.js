import React from "react";
import "../App.css";

const Repo = (props) => {
  return (
    <div className="Repo">
      <label>{"Owner : " + props.ownername}</label>
      <br />
      <br />
      <label>{props.name}</label>
      <br />
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.url}
      </a>
      <p>{props.description}</p>
      <label>{"Stars : " + props.stars}</label>
    </div>
  );
};

export default Repo;
