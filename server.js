const express=require("express");
const app=express();
const port=3000;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){res.sendFile(__dirname+"/index.html");});
app.post("/",function(req,res){
  var we=Number(req.body.weight);
  var he=Number(req.body.height);
  var bmiResult=we/(he*he);
  res.send("<h2>BMI=</h2>"+bmiResult);
});
app.listen(3000,function(){console.log("server is working");});
