// youtuber1
// youtuber2(cheater)

const personSkill = {
    name : "Muskan Chopra",
    skill : "full stack developer",
    project_description : function(){
        console.log(`${this.name} is a geart persons as well as ${this.skill}.`)
    }
}

const cheaterOne = {
    name : "Abhishek Upadhyay",
    skill : "MERN stack developer"
}

personSkill.project_description()  //callinh function in object 

// now calling same function for cheater Object using call() method 

personSkill.project_description.call(cheaterOne);

// passing arrrument in that function
const personSkill1 = {
    name : "Muskan Chopra",
    skill : "full stack developer",
    project_description : function(ratings, comp , pos){
        console.log(`${this.name} is a geart persons as well as ${this.skill}.
        ${this.name} is rated as ${ratings} star in coder and works in ${comp} as a ${pos} `)
    }
}

const cheaterOne1 = {
    name : "Abhishek Upadhyay",
    skill : "MERN stack developer"
}

personSkill1.project_description(5, "celebal tech", "Junior assosiate")

personSkill1.project_description.call(cheaterOne1 , 5, "celebal tech", "Junior assosiate");

