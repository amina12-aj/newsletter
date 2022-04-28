const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.use(express.static("public"));
app.use (bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
    response.sendFile(__dirname + "/signup.html");
});
app.post("/", function(request,respond){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
    console.log(firstname,lastname,email);
});




app.listen(process.env.PORT||3000, function(){ 
    console.log("server started on port 3000")})