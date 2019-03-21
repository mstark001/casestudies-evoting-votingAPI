
const electionRoutes = require('./electionRoutes');
//Dependnecy inejction for th full application
module.exports = function(app) {
  electionRoutes(app);
};