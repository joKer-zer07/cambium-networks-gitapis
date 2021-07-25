const express = require("express");
const router = express.Router();
const apiHelper = require("./apihelper");
const User = require("./models");
const cors = require("cors");

const API = "https://api.github.com";

//route to fetch the user repos
router.get("/:username/repos", cors(), (req, res) => {
  apiHelper
    .makeAPICall(`${API}/users/${req.params.username}/repos`)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

//route to fetch the user information
//push the user to database if not present
router.get("/:username/userdetails", cors(), (req, res) => {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) {
      res.status(400).json({
        error: "Error while searching for user in the DB",
      });
    }
    if (!user) {
      apiHelper
        .makeAPICall(`${API}/users/${req.params.username}`)
        .then((response) => {
          const body = {
            username: response.login,
            name: response.name,
            imageUrl: response.avatar_url,
            profUrl: response.html_url,
            followers: response.followers,
            following: response.following,
            noOfRepos: response.public_repos,
            memberSince: response.created_at,
          };
          const user = new User(body);
          user.save((err, user) => {
            if (err) {
              return res.status(400).json({
                err: "NOT able to save user to the DB",
              });
            }
            res.send(user);
          });
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
