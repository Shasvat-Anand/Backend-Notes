
//  factory function----

 

// function Personmaker(name , age){
//     const person ={
//         name : name,

//         age : age,

//         talk:function() {
//             console.log("person is talking and say hello")
//         }

//     }

//     return person;
    
// }

// let  P1 = new Personmaker("annad ", 24);
// let  P2 = new Personmaker("shasvat ", 21);
// console.log(P1)
// P1.talk()




//  constructor



// function Person(name , age){
//     this.name = name;
//     this.age = age;
     
    
// }

// Person.prototype.talk = function(){
//     console.log("hey buddy what are you doing",this.name)
// }


// let Person1 = new Person("golu " , 12);
// let Person2 = new Person("golu beta " , 14);

// console.log(Person1)
// console.log(Person1.talk == Person2.talk)

// Person1.talk()


//  classes ----

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;

//     }

//     talk(){
//         console.log("hey dude, you are so great and productive");
//     }
// }

// let P1  = new Person("Ajju", 23)

// console.log(P1)
// P1.talk()



//  Inheritance----
class Person{
    constructor(name ,age){
        this.name = name;
        this.age= age;
    }

    talk(){
        console.log("HI I am ", this.name);
    }
}

class Student extends Person {
    constructor(name , age , classname){
        super(name, age);
        this.classname = classname;
    }

     
}

class Teacher extends Person{
    constructor(name, age , course){
        super(name,age);
        this.course = course;
    }
    
}

let T1 = new Teacher("abhimanu" , 34, "science")

let S1 = new Student("Golu beta " ,12, "5th" )
console.log(S1.classname)
console.log(S1.name)
console.log(S1.age)
console.log(T1.name)
console.log(T1.course)
console.log(T1.age)
T1.talk()
S1.talk()



class Mammal {
    constructor(name){
     this.type = "warm blooded"
     this.name= name;
    }

    walk(){
        console.log( this.name ,"is walking")
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
        
    }
    bark(){
        console.log(this.name," is barking")
    }

}

class Cat extends Mammal{
    constructor(name){
        super(name);
        
    }



}

let D1 = new Dog("kalua");
let C1 = new Cat("billie");

console.log(D1)
console.log(C1)

D1.bark()
C1.walk()
D1.walk()