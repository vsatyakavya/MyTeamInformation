var inquirer = require("inquirer");
var fs = require('fs');
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./intern");
const Manager = require("./Manager");
// const render = require("./htmlRenderer");




const role = ["Manager", "Engineer", "Intern"];
inquirer
    .prompt([
        {
            type: "input",
            message: "what is you name",
            name: "name"
        },
        {
            type: "list",
            message: "what is your role",
            name: "role",
            choices: role

        },
        {
            type: "input",
            message: "what is your id",
            name: "id"
        },
        {
            type: "input",
            message: "what is your email id",
            name: "email"
        },

    ]).then(function (data) {
        // var result = (generateHtml(data));
        // writeToFile("intro.html", result);
        // console.log("success!!!");
        // console.log(data.role);
        if (data.role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "what is your Office Number",
                    name: "officeNumber"
                }
            ]).then(function(role){
                console.log(role.officeNumber);
                const manager = new Manager(data.name,data.id,data.email,role.officeNumber)
                
                console.log(manager);
                // render(manager);
            })
            
        }
        else if (data.role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "what is your Github Account",
                    name: "github"
                }
            ]).then(function(role){
                console.log(role.github)
                const engineer = new Engineer(data.name,data.id,data.email,role.github)
                
                console.log(engineer);

            })

        }
        else if (data.role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "what is your school Name",
                    name: "school"
                }
            ]).then(function(role){
                console.log(role.school);
                const intern = new Intern(data.name,data.id,data.email,role.school)
                
                console.log(intern);
                

            })
        }
         

    })

    

    
    
    
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("successfully added")
//         }
//     })
// }
