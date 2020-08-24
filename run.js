const age = prompt("Hoew old are you?");

// 조건문
if (age >= 18 && age <= 21){
    console.log("you can drink but you should not");
} else if (age > 21){
    console.log("you cant");
} else {
    console.log("too young");
}