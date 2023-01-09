const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Categories = require("./categories.models");
const Todos = require("./todo.model");

const TodosCategories = db.define(
  "task_categories",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,    
      key: "id",
      references: {
        model: Categories,
        key: "id",
      }
      },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "task_id",
      references: {
        model: Todos,
        key: "id",
      }
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TodosCategories;