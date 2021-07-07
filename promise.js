const A = new Promise((resolve,reject) =>{
    setTimeout(() =>{
let roll_no = [1,2,3,4,5,6];
// resolve(roll_no);
reject(`Error while communucating`)
    },5000);


});
A.then(()=>{
console.log(roll_no);
}).catch((error) =>{
console.log(error);
}) 