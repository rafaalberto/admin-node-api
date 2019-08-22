const bcrypt = require('bcryptjs');
const { User } = require('../app/models');

module.exports = {
    async findAll(req, res) {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        return res.json(200, users);
    },
    async findById(req, res) {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id }, 
            attributes: { exclude: ['password'] }
        });
        return res.json(200, user);
    },
    async create(req, res) {
        const { name, username, password } = req.params;
        const hash = await bcrypt.hash(password, 8);
        const userCreated = await User.create({
             name,
             username,
             password: hash
        });
        return res.json(201, userCreated);
    },
    async update(req, res) {
        const { id, name, username, password } = req.params;
        try {
            const hash = await bcrypt.hash(password, 8);
            const userUpdated = await User.update(
                { name, username, password: hash },
                { where: { id }});
            return res.json(200, userUpdated[0]);
        } catch (e) {
            console.warn(e.message);
            return res.json(500, { message: 'Error to update' });
        }
    },
    async delete(req, res) {
        const { id } = req.params;
        await User.destroy({
            where: { id }
        });
        return res.json(204, { message: 'User deleted' });
    }
}