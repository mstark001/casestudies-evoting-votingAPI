var Endpoint = require('./models/endpoint');

var ObjectID = require('mongodb').ObjectID;
var db = null;



class EndpointController {

    createEndpoint(req, res){
      try
      {
        let endpoint = new Endpoint();
        endpoint.url = req.body.url;
        endpoint.countryCode = req.body.countryCode;
        endpoint.postCodes = req.body.postCodes;

        Endpoint.create(endpoint.toJSON(), (err, out) => {
            if (err) { 
                res.send({ 'ERROR': 'An error has occurred '+err }); 
            } else {
                res.send(endpoint);
            }
        });
      }
      catch (err)
      {
        console.log(err);
        res.send({"ERROR": 'An error has occurred'});
      }
    }

    getEndpoint(req, res){
      try
      {
        const countryId = req.params.countryId;
        const postCode = req.params.postCode;

        Endpoint.find({}, (err, out) => {
            if (err) {
                res.send({'ERROR':'An error has occurred '+err});
            } else {
                for (let i = 0; i < out.length; i++)
                {
                    if (out[i].postCodes.includes(postCode) &&
                    (out[i].countryCode === countryId))
                    {
                        //We found it!
                        res.send(out[i].url);
                        return;
                    }
                }

                //We didn't find it
                res.send({'ERROR':'An error has occurred and the required endpoint could not be found'});

            }
        });
      }
      catch (err)
      {
        console.log(err);
        res.send({"ERROR": 'An error has occurred'});
      }
    }

    getEndpoints(req, res){
      try
      {
        Endpoint.find({}, (err, out) => {
            if (err) {
              res.send({'ERROR':'An error has occurred '+err});
            } else {
              res.send(out);
            }
        });
      }
      catch (err)
      {
        console.log(err);
        res.send({"ERROR": 'An error has occurred'});
      }
    }

    updateEndpoint(req, res){
      try
      {
        const id = req.params.id;
        const idObject = { '_id': new ObjectID(id) };
      
    

        let endpoint = new Endpoint();
        endpoint._id = idObject;
        endpoint.url = req.body.url;
        endpoint.countryCode = req.body.countryCode;
        endpoint.postCodes = req.body.postCodes;

      
        Endpoint.updateOne(idObject, endpoint.toJSON(), (err, out) => {
          if (err) {
              res.send({'ERROR':'An error has occurred '+err});
          } else {
              res.send(endpoint);
          } 
        });
      }
      catch (err)
      {
        console.log(err);
        res.send({"ERROR": 'An error has occurred'});
      }
    }

    deleteEndpoint(req, res){
      try
      {
        const id = req.params.id;
        const idObject = { '_id': new ObjectID(id) };
        Endpoint.deleteOne(idObject, (err, out) => {
          if (err) {
            res.send({'ERROR':'An error has occurred '+err});
          } else {
            res.send(out + ' deleted');
          } 
        });
      }      
      catch (err)
      {
        console.log(err);
        res.send({"ERROR": 'An error has occurred'});
      }
    }

}

module.exports = EndpointController;
