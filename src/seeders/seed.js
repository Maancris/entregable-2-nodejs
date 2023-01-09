const db =require ('../utils/database');
const Users = require ('../models/users.model');
const Todos = require ('../models/todo.model');

const users =[
    { username: 'cristian' , email: 'nomana@gmail.com',  password: 1234},
    { username: 'nacho' , email: 'cristian@gmail.com', password: 1345},
    { username: 'cmauri' , email: 'nomnisa@gmail.com',  password: 12356},
];

const todos = [
    {title: 'tarea 1', description : 'descripcion para 1', userId: 1},
    {title: 'tarea 3', description : 'descripcion para 3', userId: 2},
    {title: 'tarea 1', description : 'descripcion para 1', userId: 3}
];

 
db.sync({force: false})
.then (()=>{
    console.log ('Iniciando con el sembrado');
    users.forEach ((user)=> Users.create(user));
    setTimeout(()=>{
        todos.forEach((todo)=> Todos.create(todo));
    }, 100)
})
.catch(error => console.log (error))