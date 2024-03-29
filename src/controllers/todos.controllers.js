const TodosServices = require("../services/todos.services");

const getAllTodos = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createTodos = async (req, res) => {
  try {
    const todo = req.body;
    const result = await TodosServices.create(todo);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTodosWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getWithCategories(id);
    res.json({
      message: "Envinado tareas con categorias",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.messages,
      details: error.stack,
    });
  }
};


module.exports = {
  getAllTodos,
  getTodoById,
  createTodos,
  updateTodos,
  deleteTodos,
  getTodosWithCategories,
}