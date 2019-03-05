var UserController = require('../controllers/userController');
const VerifyLoginToken = require('./VerifyLoggedIn');
const VerifyAuditToken = require('./VerifyAuditor');

module.exports = function(routes) {

  let userController = new UserController();

  //Create
  routes.post('/users', userController.createUser);
  //Read
  routes.get('/users/:id', VerifyAuditToken, userController.getUser);
  //Read All
  routes.get('/users', VerifyAuditToken, userController.getUsers);
  //Update
  routes.put('/users/:id', VerifyAuditToken, userController.updateUser);
  //Delete
  routes.delete('/users/:id', VerifyAuditToken, userController.deleteUser);
  //Login
  routes.post('/users/login', userController.login);
};  