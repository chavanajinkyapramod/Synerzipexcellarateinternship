//Arrow Function



/*
Normal Functions

function (args){

}



Arrow Function

(args) => {

}

here in arrow { } are optional and return is optional

*/




function sum (a,b){
    return a + b ;
}


let sum2 =  (a,b) =>   a + b ;


function isPositive(number){
    return number >= 0;
}


let isPositive2 = number =>  number >= 0;





function randomNumber(){
    return Math.random;

}

let  randomNumber = () => Math.random;

// Arrow functions is used for used to create anonymous functions//
document.addEventListener('click',()=>    console.log('click'))






class Person {
    constructor(name){
        this.name = name
    }


    printNameArrow() {
        setTimeout(()=>{
            console.log('Arrow: ' +this.name)
            },100)
    }
//here this.name does not get redefined  in any scope in which it is called


    printNameFunction(){
        setTimeout(function(){
            console.log('Function:' + this.name)

        },100)

    }
}


let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()

//.name is not defined in global scope


