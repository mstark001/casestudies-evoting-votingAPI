
const userRoutes = require('./userRoutes');
const endpointRoutes = require('./endpointRoutes');


module.exports = function(app) {
  userRoutes(app);
  endpointRoutes(app);
};