var inquirer = require("inquirer");
var fs = require('fs');
const generateHtml = require("./generateHTML");
inquirer
.prompt([
    {
        type:"input",
        message:"what is you name",
        name: "name"
    },
    {
        type:"input",
        message:"what is you location",
        name: "location"
    },
    {
        type:"input",
        message:"tell us your bio",
        name: "bio"
    },
    {
        type:"input",
        message:"your linked account url",
        name: "linkedin"
    },
    {
        type:"input",
        message:"your github url",
        name: "github"
    },
   ]).then (function(data){
       var result = (generateHtml(data));
       writeToFile("intro.html",result);
       console.log("success!!!");
       
       
   })
   function writeToFile(fileName,data){
fs.writeFile(fileName,data,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("successfully added")
    }
})
   }
   