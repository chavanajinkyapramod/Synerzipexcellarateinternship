// Any function that is passed as an argument is called as callback function  //
// A callback is a function that is to be executed after another function has finished executing //


// const funA = ( ) => {
    
// setTimeout(()  => {
//     console.log(`Welcome Fun A`);
//     funB();
// },3000)

// }







// const funB = () => {
//     console.log(`Welcome Fun B`);



// }

// funA();



const personeone = (friend,callback) => {
    console.log(`I am buzy right now I am talking to ${friend}.I will call you back. `);
    callback();
}
const persontwo = () =>{
    console.log("Hey I saw your callback msg")
}


personeone( "Ajinkya",persontwo);
// persontwo();

// call back tab use hota hain jab hum dusra function tab tak run nahi karna chahte jab tak pehla wala run na ho jaye//