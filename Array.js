var arr = [ "apple" ,23, 2002, null, true, "Muskan", NaN]

console.log(arr.length)

for(var i=0; i < arr.length; i++) {
    console.log(arr[i])
  }
  
  //ES6
  for( var array of arr){
    console.log(array)
  }

// add element in end
  arr.push("India","is",'love')

  console.log(arr.length)
  console.log(arr)
  
// add element at beggining
  arr.unshift("India","comes",'first')
  
  console.log(arr.length)
  console.log(arr)


// remove element from end
  arr.pop()
  console.log(arr.length)
  console.log(arr)
  
// Remove element from beggining
  arr.shift()
  console.log(arr.length)
  console.log(arr)
  

// adding and removing element on any index

//arr.splice(startIndex, number of elements want to delete, elements.....)

arr.splice(0, 1) //remove

console.log(arr)

arr.splice(2, 1,"null means nthg") //remove null and add null means nthg
console.log(arr)



//create string or convert array to string 

console.log(arr.join())
console.log(arr.join(""))
console.log(arr.join("-"))
console.log(arr.join(" "))


//extract out portion

console.log(arr.splice(5, 7))

//merging 2 array
var arr1 = ["cat", 'dog', 'kuta']

var con = arr1.concat(arr)
console.log(con)

//merging more then 2 array

var arr2 = ["rose", "oppo", "tonny" , "emmi"]
var con1 = arr.concat(arr1, arr2)
console.log(con1)


//check weather element is present or not

console.log(arr.includes(23))

console.log(arr.includes(5))

//find wher it present

console.log(arr.indexOf(23))

//  search an array based on certain condition
//ES6 part [find() method amnd findIndex() method]

var searchcon = arr.find(function(i){
  return i > 4;
});
console.log(searchcon)

var searchcon_index = arr.findIndex(function(i){
    return i > 4;
  });

  console.log(searchcon_index);

// But these methods only gives single value or first value
// for getting all values we need to use method filter()

var searchconall = arr.filter(function(i){
    return i > 4;
  });
  
  console.log(searchconall);


  // SORTING of array

  //sort alphabetically
  console.log(arr.sort());
  
//   for sorting numerically :

  array = [3,56,78,34,1,6,789,67,3456,78,789,4]

  var sort_arr = array.sort(function(a, b) {
    return a-b;
  })

  //reverse array
  console.log(arr.reverse());


  // sorting array of objects

var student = [
    {name : 'sahil', age : 20},
    {name : 'sammeer', age : 10},
    {name : 'zisha', age : 2}
  ]
  
  var obj = student.sort(function(a, b){
    return a.age - b.age;
  })
  
  console.log(obj);
  

// min max methods
  let p = [35,22,65,7,8,9,12,121,33,99];

  console.log(Math.min(...p))
  
  console.log(Math.max(...p))