// simple calculator with the help of Typescript and node js...

import inquirer from "inquirer";

// asking question from user through inquirer

let answers = await inquirer.prompt ([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "secondnumber"},
    {
        message: "select one operater to perform operation",
        type: "list",
        name: "operater",
        choices: ["Addition","Substraction","Multiplication","Division"],

    },
])

// conditional statements if-else

if(answers.operater === "Addition"){

    console.log(answers.firstnumber + answers.secondnumber);
    

}
else if(answers.operater === "Substraction"){

    console.log(answers.firstnumber - answers.secondnumber);
    
}
else if(answers.operater === "Multiplication"){

    console.log(answers.firstnumber * answers.secondnumber);
    
}

else if(answers.operater === "Division"){

    console.log(answers.firstnumber / answers.secondnumber);
    
}

else{
    console.log("Invalid input");
    
}