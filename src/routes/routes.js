const UserController = require('../controllers/UserController');

module.exports = server => {
    server.get('/users', UserController.findAll);
    server.get('/users/:id', UserController.findById);
    server.post('/users', UserController.create);
    server.put('/users/:id', UserController.update);
    server.del('/users/:id', UserController.delete);
};