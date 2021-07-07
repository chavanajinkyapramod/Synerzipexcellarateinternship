const fun2 = () => {


    setTimeout(() => {
        console.log("starting fun2")
    },3000);
   
}
const fun2 = () => {


    setTimeout(() => {
        console.log("starting fun2")
    },3000);
   
}




const fun1 = () => {
    console.log("starting fun1");
    fun2();
    console.log("ending fun 1");
}
fun1();

/*  This is a example of Asynchronous programming in js
here obviously  fun 1 will be executed first   
after it it will go to fun 2 but there we had set a timeout function so we will have to wait for 3 sec so this will start executing
in parallel the fun 2 called inside fun1 will be executed and after timer is complete it will be executed */


