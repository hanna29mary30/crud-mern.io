import User from "./schema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  console.log(request.body);
  const newuser = new User(user);
  try {
    await newuser.save();
    response.status(201).json(newuser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getUserById = async (request, response) => {
  try {
    const user = await User.findOne({ id: request.params.id });
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
