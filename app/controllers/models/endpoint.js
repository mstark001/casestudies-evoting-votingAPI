var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endpointSchema = new Schema({

  url: {
      unique: true,
      required: true,
      type: String
  },
  countryCode: {
      required: true,
      type: String
  },
  postCodes: {
      required: true,
      type: [String]
  }

});

var Endpoint = mongoose.model('Endpoint', endpointSchema);

module.exports = Endpoint;