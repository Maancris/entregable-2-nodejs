const Users = require('../models/users.model');
const Todos = require("../models/todo.model");

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithTodos(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['username', 'email'],
                include: {
                    model:Todos,
                    as:'task',
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async upDate(id, field) {
        try {
            const result = await Users.update({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = Todos.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserServices;