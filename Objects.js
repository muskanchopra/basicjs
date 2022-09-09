//in JavaScript everything is an object


//Crearting object
var person = {
    firstName : "Muskan",
    lastName : "Chopra",
    age : 20,
    haveAccount: true,
    display : function(){
      console.log(this.firstName + this.lastName + "'s age is " + this.age)
    }
  };

  person.display();  //calling object
  person["display"]();  // another way of calling object



  var persons = {
    firstName : "Muskan",
    lastName : "Chopra",
    age : 20,
    haveAccount: true
  };

  for(var i in persons){
    console.log(persons[i]);
  }


// Setting object's property

persons.company = "celebal tech"

console.log(persons.company)

persons["email"] = "xyz1234@gmail.com"

console.log(persons.email)

console.log(persons)

// updating value :

persons.age = 21
persons["age"] = 22

