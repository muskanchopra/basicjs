// Function Declaration
function hello(){
    console.log('Hello World!!!!')
}

// Function Call
hello()

// with parameters

function add(a, b) {
    console.log(a+b)
}

add(5,6);

function evenodd( num ){
    if (num%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd")
    }
}

evenodd(6) //"even"
evenodd(99)  //"odd"

// Pass default value (ES6)

function evenodd( num = 20){
    if (num%2 == 0){
        console.log("even");
    }
    else{
        console.log("odd")
    }
    console.log(num);
}

evenodd()  // "even" 20
evenodd(6) //"even"  6
evenodd(99)  //"odd"  99

// returning array to return multiple values:

function divNum( num1, num2){
    var q = num1 / num2;
    var mod = num1 % num2
    var arr = [num1, num2, q, mod];
    return arr;
}
 
var val = divNum(10, 2);
 
console.log("num1 = " + val[0]);
console.log("num2 = " + val[1]);
console.log("qutiont of num1 and num2 =" + val[2]);
console.log("mod of num1 and num2 =" + val[3]);