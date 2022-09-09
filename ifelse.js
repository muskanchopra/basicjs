// code that perform some sort of action based on some condition
//eg. rasgulla khaogi agr pass hui toh varna gulabjamun khaogi

// if (condition)
//      true then this block will execute
// else 
//      this will execute

// similarly for else if else if ..

// if (condition1)
//      true then this block will execute
// else if (condition2)
//      true then this block will execute
// else if (condition3)
//      true then this block will execute
// else 
//      this will execute


// example

num = 30;

if (num>=0 && num<10){
    console.log("number is between 0 to 10")
}
else if (num>=10 && num<20){
    console.log("number is between 10 to 20")
}
else if (num>=20 && num<30){
    console.log("number is between 20 to 30")
}
else if (num>=30 && num<=40){
    console.log("number is between 40 to 30")
}
else {
        console.log("It's not your cup of tea .....haha")
}

