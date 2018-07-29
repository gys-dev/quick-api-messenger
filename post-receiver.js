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
      
             response.write("{\"status\":\"success\"}");
        
             
            
         }else{
           response.write("{\"status\":\"error\",\"type\":\"id or content not null\"}")
         };
         response.end();

     });
     app.listen(8080);
 });
 