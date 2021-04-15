import { v4 as uuidv4 } from "uuid";

let users = [];

//Get-Users
export const getUsers = (req, res) => {
  res.send(users);
};

//Create User
export const createUsers = (req, res) => {
  const user = req.body;

  const userID = uuidv4();
  const userWithID = { ...user, id: userID };
  users.push(userWithID);

  res.send(`User with the name ${user.firstName} added to the Database`);
};

//Get-User
export const getUser = (req, res) => {
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
};

//Delete-User
export const deleteUser = (req, res) => {
  const { id } = req.params;

  //if it returns false then user will deleted from the database
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id: ${id} deleted from the database`);
};

//Update User
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id: ${id} has been Updated`);
};
