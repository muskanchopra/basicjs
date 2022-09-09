// takes argument as an array

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

personSkill1.project_description.apply(cheaterOne1 , [5, "celebal tech", "Junior assosiate"]);

// also it works as in min max function where it take 2 argument 1 => this funtion so we pass null here and another is array

let arr =  [1,45,6,342,76,2,656,7,7,64432,2,3,456,7,675]

console.log(Math.max.apply(null, arr));

console.log(Math.min.apply(null, arr));