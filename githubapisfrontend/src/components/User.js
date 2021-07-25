import React from "react";
import "../App.css";

const User = (props) => {
  return (
    <div className="User">
      <label className="UserHeader">{props.name}</label>
      <br />
      <a href={props.profUrl} target="_blank" rel="noreferrer">
        <img src={props.imgUrl} alt="" />
      </a>
      <br />
      <label className="UserDetails">{"Followers : " + props.followers}</label>
      <br />
      <label className="UserDetails">{"Following : " + props.following}</label>
      <br />
      <label className="UserDetails">
        {"No of Repos : " + props.noOfRepos}
      </label>
      <br />
      <label className="UserDetails">
        {"Member Since : " + props.memberSince}
      </label>
    </div>
  );
};

export default User;
