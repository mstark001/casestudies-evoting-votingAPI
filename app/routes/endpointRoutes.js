var EndpointController = require('../controllers/endpointController.js');
const VerifyLoginToken = require('./VerifyLoggedIn');
const VerifyAuditToken = require('./VerifyAuditor');

module.exports = function(routes) {

  let endpointController = new EndpointController();

  //Create
  routes.post('/endpoint', VerifyAuditToken, endpointController.createEndpoint);
  //Read
  routes.get('/endpoint/:countryId/:postCode', VerifyLoginToken, endpointController.getEndpoint);
  //Read All
  routes.get('/endpoint', VerifyAuditToken, endpointController.getEndpoints);
  //Update
  routes.put('/endpoint/:id', VerifyAuditToken, endpointController.updateEndpoint);
  //Delete
  routes.delete('/endpoint/:id', VerifyAuditToken, endpointController.deleteEndpoint);
}; 