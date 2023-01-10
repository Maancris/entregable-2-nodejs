//vamos a importar todos los modelos importados
const Users = require ('./users.model');
const Todos = require ("./todo.model");
const Categories  = require ('./categories.models');
const TodosCategories = require('./todos.categories');


const initModels = ()=>{

    
    Todos.belongsTo(Users, {as: "author", foreingkey: "user_id"}); //beLongsTo (pertenece a: )
    Users.hasMany(Todos, {as: "task", foreingkey: "user_id"}); //hasMany (tiene muchos: )
    TodosCategories.belongsTo(Todos, {as: "task", foreingkey: "todo_id"});
    Todos.hasMany(TodosCategories, {as: "category", foreingkey: "todo_id"});
   
    TodosCategories.belongsTo(Categories, {as: "category", foreingkey: "category_id"});
    Categories.hasMany(TodosCategories, {as: "task", foreingkey: "category_id"});

}

module.exports = initModels;