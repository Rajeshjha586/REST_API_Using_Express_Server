const express = require("express");
const router = express.Router();

let users = [
  {
    id: "_abcde",
    firstName: "Steve",
    lastName: "Rouger",
    age: 25,
    gender: "Male",
    email: "steverouger@mail.com",
  },
  {
    id: "_fghijk",
    firstName: "Captain",
    lastName: "America",
    age: 29,
    gender: "Male",
    email: "camerica@mail.com",
  },
];

//create unique id
let getID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

//REST API Configuration

//GET Request
router.get("/users", (req, res) => {
  console.log(
    `GET Request Received at server ... ${new Date().toLocaleTimeString()}`
  );
  res.send(users);
});

//POST Request
router.post("/users", (req, res) => {
  let user = {
    id: getID(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
  };

  users.push(user);

  console.log(
    `POST Request Received at server ... ${new Date().toLocaleTimeString()}`
  );

  res.json({ msg: "POST Request is Success" });
});

//PUT Request
router.put("/users/:id", (req, res) => {
  let userID = req.params.id;
  let updatedUser = {
    id: getID(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email,
  };

  let existingUser = users.find((user) => {
    return user.id === userID;
  });

  users.splice(users.indexOf(existingUser), 1, updatedUser);
  console.log(
    `PUT Request Received at server ... ${new Date().toLocaleTimeString()}`
  );

  res.json({ msg: "PUT Request is Success" });
});

//DELETE Request
router.delete("/users/:id", (req, res) => {
  let userID = req.params.id;

  users = users.filter((user) => {
    return user.id !== userID;
  });

  console.log(
    `DELETE Request Received at server ... ${new Date().toLocaleTimeString()}`
  );

  res.json({ msg: "DELETE Request is Success" });
});

module.exports = router;
