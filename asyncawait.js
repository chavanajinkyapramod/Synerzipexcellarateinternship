const getData = async() => {                               // here async is used to make the complete function asynchronous
    var y = await "Hello World";           // here await is used so that the next executions are stopped until this execution is completed
    console.log(y);
}
  
console.log(1);
getData();
console.log(2);