var jwt = require('jsonwebtoken');
var config = require('../../config/enviromentVariables');

//Verify the user is succesfully logged in to this server in the middleware
function verifyToken(req, res, next) {
  var token = req.headers['x-access-token2'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.localSecret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    //Everything good?

    
    next();
  });
}

module.exports = verifyToken;