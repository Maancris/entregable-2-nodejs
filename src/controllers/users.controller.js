const UserServices = require("../services/user.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserWithTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithTodos(id);
    res.json(result); // defecto se responde status 200
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUsers = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUsers = (req, res) => {
  res.json({ message: "Actualizando usuario" });
};

const deleteUsers = (req, res) => {
  res.json({ message: "eliminando un usuario" });
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  getUserWithTodos
};

