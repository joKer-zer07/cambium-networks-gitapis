import { API } from "./api";

//get user details
export const getUserDetails = (username) => {
  return fetch(`${API}/${username}/userdetails`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch((err) => {
      return err;
    });
};

//get user repos
export const getAllRepos = (username) => {
  return fetch(`${API}/${username}/repos`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch((err) => {
      return err;
    });
};
