
/*To calculate string length*/

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.write( text.length);


/*slice() extracts a part of a string and returns the extracted part in a new string counting begins from 0 and spaces are also considered*/
let str = "Apple, Banana, Kiwi";
str.slice(7, 13);





/*substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.*/


let str = "Apple, Banana, Kiwi";
substring(7, 13) 





/*
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part i.e from end to start.*/



let str = "Apple, Banana, Kiwi";
str.substr(7, 6)    // Returns Banana






/*The replace() method replaces a specified value with another value in a string:*/

let text = "Hello Ajinkya";
let newText = text.replace("Hello", "Hi");
document.write(newText);


/*To replace all matches, use a regular expression with a /g flag (global match in string):*/
 let text3 = "Hello Ajinkya Chavan ,how are you Ajinkya Chavan";
  text3.replace(/Ajinkya/g,"AJ");
document.write(text3);

/*Convert String to uppercase*/

  let text4 = "Hello World!";       // String
let text5 = text4.toUpperCase();  // text2 is text1 converted to upper
document.write(text5);


/*Convert String to lowercase*/

let text6 = "Hello World!";       // String
let text7 = text6.toLowerCase();  // text2 is text1 converted to lower
document.write(text6);






/*concat() joins two or more strings:*/

let text8 = "Hello";
let text9 = "World!";
let text10 = text8.concat(" ",text8);
document.write(text10);


/* trim() removes spaces*/
function myFunction() {
  let text = "     Hello World!     ";
  alert(text.trim());
}






/*padding add zero at start or end*/

let text11 = "9";
document.write( text11.padStart(4,0));
document.write( text11.padEnd(4,0));

/*prints char at nth position*/
let text12 = "HELLO WORLD";
text12.charAt(0)  



/*charcodeat returns unicode number*/
let text = "HELLO WORLD";
document.write( text.charCodeAt(0));


/*we can access characters on string using  their position using [] */


let text = "HELLO WORLD";
text[0]    


/*you can convert string to array using split*/
let text = "a,b,c,d,e,f";
const myArray = text.split(",");
document.write( myArray[0]);
