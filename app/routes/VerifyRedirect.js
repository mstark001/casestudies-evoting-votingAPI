var jwt = require('jsonwebtoken');
var config = require('../../config/enviromentVariables');

//Verify the user logged into o the endpoint server
//This middleware is only used to verify on a 2 stage login system
//as the first stage server should pass in a access token from the first server
//and that token is required to perform the second stage log in
function verifyAudit(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.globalSecret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    next();
  });
}

module.exports = verifyAudit;