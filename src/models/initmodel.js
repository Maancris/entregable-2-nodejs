//vamos a importar todos los modelos importados
const Users = require ('./users.model');
const Todos = require ("./todo.model");
const Categories  = require ('./categories.models');
const TodosCategories = require('./todos.categories');


const initModels = ()=>{

    
    Todos.belongsTo(Users, {as: "author", foreignKey: "user_id"}); //beLongsTo (pertenece a: )
    Users.hasMany(Todos, {as: "task", foreignKey: "user_id"}); //hasMany (tiene muchos: )
    
    TodosCategories.belongsTo(Todos, {as: "task", foreignKey: "todo_id"});
    Todos.hasMany(TodosCategories, {as: "categories", foreignKey: "todo_id"});
   
    TodosCategories.belongsTo(Categories, {as: "category", foreignKey: "category_id"});
    Categories.hasMany(TodosCategories, {as: "task", foreignKey: "category_id"});

}

module.exports = initModels;