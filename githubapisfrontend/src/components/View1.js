import React, { useState } from "react";
import Repo from "./Repo";
import "../App.css";
import { getAllRepos } from "../backend/apicalls";

const View1 = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const handleTextBoxChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <label className="Username">Username : </label>
      <input
        type="text"
        className="form-control my-3"
        autoFocus
        onChange={handleTextBoxChange}
        value={userName}
        required
        placeholder="Enter Username"
      />
      <br />
      <br />
      <button
        className="Button"
        onClick={() =>
          getAllRepos(userName).then((data) => {
            if (data.message !== "Not Found") {
              if (!data.length) {
                setFlag(false);
                setErrorMsg("No Repos Found!!!");
              } else {
                setData(data);
                setFlag(true);
              }
            } else {
              setFlag(false);
              setErrorMsg("User Not Found!!!");
            }
          })
        }
      >
        Get User Repos
      </button>
      {flag ? (
        data.map((d) => {
          return (
            <div>
              <br />
              <Repo
                ownername={d.owner.login}
                description={d.description}
                name={d.name}
                url={d.html_url}
                stars={d.stargazers_count}
              ></Repo>
            </div>
          );
        })
      ) : (
        <div>
          <br />
          <div className="Error">
            <label>{errorMsg}</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default View1;
