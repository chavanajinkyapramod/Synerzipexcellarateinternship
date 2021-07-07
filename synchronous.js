const fun2 = () => {
    console.log("starting fun2")
}




const fun1 = () => {
    console.log("starting fun1");
    fun2();
    console.log("ending fun 1");
}
fun1();





/* here  fun1 is called first  so it will print starting fun1 
After that fun2() will be called so it will go to the fun2 function and print starting fun2
and then again it will return to the fun1 where fun2 is called and will print ending fun 1



So basically in synchronous  the functions are executed in a sequence 
*/