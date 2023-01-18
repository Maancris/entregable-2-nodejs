const { Router } = require("express");
const {
  getAllTodos,
  getTodoById,
  createTodos,
  updateTodos,
  deleteTodos,
  getTodosWithCategories,

} = require("../controllers/todos.controllers");
const authMiddleware = require ('../middlewares/auth.middlewares');

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);

router.get("/todos/:id", authMiddleware, getTodoById);

router.get ('/todos/:id/categories', authMiddleware, getTodosWithCategories);

router.post("/todos", authMiddleware, createTodos);

router.put("/todos/:id", authMiddleware, updateTodos);

router.delete("/todos/:id", authMiddleware, deleteTodos);


module.exports = router;