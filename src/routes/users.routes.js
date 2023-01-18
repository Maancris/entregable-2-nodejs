const {Router,} = require ('express');
const {getAllUsers, 
       getUsersById,
       getUserWithTodos, 
       createUsers, 
       updateUsers, 
       deleteUsers} = require ('../controllers/users.controller');
       const authMiddleware = require ('../middlewares/auth.middlewares');

const router = Router();
 //locahost:8000/users
 //controlador
router.get('/users', authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUsersById);

//obtener un usuarios con su taras
router.get ('/users/:id/todos', authMiddleware, getUserWithTodos );

router.post('/users', createUsers);

router.put('/users/:id',authMiddleware, updateUsers);

router.delete('/users',authMiddleware, deleteUsers);

module.exports = router;

