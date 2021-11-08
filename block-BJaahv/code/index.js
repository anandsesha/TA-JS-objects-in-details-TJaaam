console.log(`Hii`)

// Function pattern
// function createProjects(name,id,noOfProjects){
//     let project = {};
//     project.name = name;
//     project.id = id;
//     project.noOfProjects = noOfProjects;
    
//     project.getProjects = function(){
//         return project.noOfProjects;
//     }  
//     project.changeName = function(newName){
//         return project.name = newName;
//     }  
//     project.incrementProject = function(val = 1){
//         project.noOfProjects = project.noOfProjects + val;
//         return project.noOfProjects;
//     }  
//     project.decrementProject = function(val = 1){
//         project.noOfProjects = project.noOfProjects - val;
//         return project.noOfProjects;
//     } 
//     return project; 
// }

// let project1 = createProjects("Blog App",1,2)

// Test cases run
// project1.noOfProjects
// 2
// project1.getProjects()
// 2
// project1.changeName()
// undefined
// project1.changeName("Blog App 2")
// "Blog App 2"
// project1.name
// "Blog App 2"
// project1.incrementProject()
// 3
// project1.noOfProjects
// 3
// project1.incrementProject(7)
// 10
// project1.decrementProject()
// 9


// Prototypal pattern

// let projectMethods = {
//     getProjects : function(){
//         return this.noOfProjects;
//     },  
//     changeName : function(newName){
//         return this.name = newName;
//     }, 
//     incrementProject : function(val = 1){
//         this.noOfProjects = this.noOfProjects + val;
//         return this.noOfProjects;
//     },  
//     decrementProject : function(val = 1){
//         this.noOfProjects = this.noOfProjects - val;
//         return this.noOfProjects;
//     } 
// }
// function createProjects(name,id,noOfProjects){
//     let project = Object.create(projectMethods);
//     project.name = name;
//     project.id = id;
//     project.noOfProjects = noOfProjects;
    
//     return project; 
// }

// let project1 = createProjects("Blog App",1,2)

// Test cases run

// project1
// {name: "Blog App", id: 1, noOfProjects: 2}id: 1name: "Blog App"noOfProjects: 2__proto__: changeName: ƒ (newName)decrementProject: ƒ (val = 1)getProjects: ƒ ()incrementProject: ƒ (val = 1)__proto__: Object
// project1.id
// 1
// project1.name
// "Blog App"
// project1.noOfProjects
// 2
// project1.changeName("Blog APP 2")
// "Blog APP 2"
// project1.name
// "Blog APP 2"
// project1.getProjects()
// 2
// project1.incrementProject(2)
// 4
// project1.decrementProject(1)
// 3


// Pseudoclassical Pattern
// CreateProjects.prototype = {
//     getProjects : function(){
//         return this.noOfProjects;
//     },  
//     changeName : function(newName){
//         return this.name = newName;
//     }, 
//     incrementProject : function(val = 1){
//         this.noOfProjects = this.noOfProjects + val;
//         return this.noOfProjects;
//     },  
//     decrementProject : function(val = 1){
//         this.noOfProjects = this.noOfProjects - val;
//         return this.noOfProjects;
//     } 
// }
// function CreateProjects(name,id,noOfProjects){
//     // let project = Object.create();
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
    
//     // return project; 
// }

// let project1 = new CreateProjects("Blog App",1,2)


// Test cases run
// project1
// CreateProjects {name: "Blog App", id: 1, noOfProjects: 2}id: 1name: "Blog App"noOfProjects: 2__proto__: changeName: ƒ (newName)decrementProject: ƒ (val = 1)getProjects: ƒ ()
// incrementProject: ƒ (val = 1)

// project1.name
// "Blog App"
// project1.changeName("ABC")
// "ABC"
// project1.noOfProjects()
// project1.noOfProjects
// 2
// project1.incrementProject()
// 3
// project1.decrementProject()
// 2
// project1.getProjects()
// 2
// project1.incrementProject()
// 3
// project1.getProjects()
// 3


// CLASS PATTERN

class Projects {
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;    
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        return this.name = newName;
    } 
    incrementProject(val = 1){
        this.noOfProjects = this.noOfProjects + val;
        return this.noOfProjects;
    }
    decrementProject(val = 1){
        this.noOfProjects = this.noOfProjects - val;
        return this.noOfProjects;
    }
}

let project1 = new Projects("Blog App",1,2)
let project2 = new Projects("Todo App",2,4)

// Test cases run
// project1
// Projects {name: "Blog App", id: 1, noOfProjects: 2}
// id: 1
// name: "Blog App"
// noOfProjects: 2
// __proto__:
// changeName: ƒ changeName(newName)
// constructor: class Projects
// decrementProject: ƒ decrementProject(val = 1)
// getProjects: ƒ getProjects()
// incrementProject: ƒ incrementProject(val = 1)

// project1.name
// "Blog App"
// project1.id
// 1
// project1.noOfProjects
// 2
// project1.changeName("ABCCC")
// "ABCCC"
// project1.incrementProject(100)
// 102
// project1.decrementProject(15)
// 87
// project1.getProjects()
// 87