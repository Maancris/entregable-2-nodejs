const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todo.model');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos.categories');

const users = [

    { username: "Roman", email: "roman@roman.com", password: "1234" },
    { username: "Emiliano", email: "Emiliano@roman.com", password: "we4556" },
    { username: "Arenas", email: "arenas@roman.com", password: "eewewewe" },
    { username: "Juan", email: "juan@juan.com", password: "356844" },
];

const todos = [
    { title: "Estudiar node", description: "Ir al trabajo", userId: 1 },
    { title: "Pasear al perro", description: "Ordenar la casa", userId: 2 },
    { title: "lavar los platos", description: "Limpiar el patio", userId: 3 },
    { title: "ir chequeo mensual", description: "Hacer las compras", userId: 4 },
];

const categories = [
    { name: 'personal' },
    { name: 'educacion' },
    { name: 'salud' },
    { name: 'trabajo' },
    { name: 'hogar' },
    { name: 'cocina' },
    { name: 'deporte' },
    { name: 'ocio' },
    { name: 'financiero' },
    { name: 'entretenimiento' },
];


const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
];

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la inserccion de usuarios")
        users.forEach(user => Users.create(user));
        setTimeout(() => {
            todos.forEach(todo => Todos.create(todo))
        }, 100);
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 250);
        setTimeout(() => {
            todosCategories.forEach((tc) => TodosCategories.create(tc));
        }, 350)
    })
    .catch(error => console.log(error));