require("dotenv").config();

var AWS = require("aws-sdk");

exports.aws = (req, res) => {
  console.log("message = " + req.body.message);
  console.log("phone = " + req.body.phone);
  console.log("subject = " + req.body.subject);
  var params = {
    Message: req.body.message,
    PhoneNumber: "+91" + req.body.phone,
    MessageAttributes: {
      "AWS.SNS.SMS.SenderID": {
        DataType: "String",
        StringValue: req.body.subject,
      },
    },
  };

  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  publishTextPromise
    .then(function (data) {
      console.log(data);
      res.end(JSON.stringify({ MessageID: data.MessageId }));
    })
    .catch(function (err) {
      res.end(JSON.stringify({ Error: err }));
    });
};
