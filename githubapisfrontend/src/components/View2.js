import React, { useState } from "react";
import { getUserDetails } from "../backend/apicalls";
import User from "./User";

const View2 = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleTextBoxChange = (event) => {
    if (event.target.value) {
      setUserName(event.target.value);
    } else {
      setUserName("");
      setData([]);
    }
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
          getUserDetails(userName).then((data) => {
            setClicked(true);
            setData(data);
          })
        }
      >
        Get User Details
      </button>
      {clicked &&
        (data.username ? (
          <div>
            <br />
            <User
              name={data.name}
              imgUrl={data.imageUrl}
              profUrl={data.profUrl}
              followers={data.followers}
              following={data.following}
              noOfRepos={data.noOfRepos}
              memberSince={new Date(data.memberSince).toLocaleDateString()}
            />
          </div>
        ) : (
          <div>
            <br />
            <div className="Error">
              <label>User Not Found!!!</label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default View2;
