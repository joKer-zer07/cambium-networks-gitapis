// const API = "https://api.github.com";
import { API } from "./api";
// export const getUserRepos = (username) => {
//   return fetch(`${API}/users/${username}/repos`)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error(res.statusText);
//     })
//     .catch((err) => {
//       return err.message;
//     });
// };

// export const getUserDetails = (username) => {
//   return fetch(`${API}/users/${username}`)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error(res.statusText);
//     })
//     .catch((err) => {
//       return err.message;
//     });
// };
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
