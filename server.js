 var express = require("express");

 var myParser = require("body-parser");

 const login = require("facebook-chat-api");

 var account = require('./account.json');

 var app = express();

 login({

     email: account.email,

     password: account.password

 }, (err, api) => {

     if (err) return console.error(err);

     var app = express();

     app.use(myParser.urlencoded({

         extended: true

     }));

     console.log("Listening Request API:...")

     app.get("/messenger", function(request, response) {



         // Write Something New :(

         response.writeHead(200, {
             "Content-Type": "application/json"
         });



         if (request.body.id != "undefined" && request.body.message != "undefined") {

             var id = request.query['id'],

                 mess = request.query['message'];

             var msg = {

                 body: `${mess}`



             };

             api.sendMessage(mess, id)



             response.json({
                 "status": "success"
             });




         } else {

             response.json({
                 status: "error",
                 type: "no content or id"
             })

         };



     });

     app.post("/messenger", function(request, response) {



         // Write Something New :(

         response.writeHead(200, {

             'Content-Type': 'application/json'

         });



         if (request.body.id != "undefined" && request.body.message != "undefined") {

             var id = request.body.id,

                 mess = request.body.message;

             var msg = {

                 body: `${mess}`



             };

             api.sendMessage(mess, id)



             response.json({
                 status: "success"
             });




         } else {

             response.json({
                 status: "error"

                     ,
                 type: "id or content null"
             })

         };



     });

     app.listen(process.env.PORT || 80);

 });