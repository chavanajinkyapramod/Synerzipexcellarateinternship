const personal = ["Ajinkya",12,"Chavan"];
undefined
console.log(personal);
VM2082:1 (3) ["Ajinkya", 12, "Chavan"]
undefined
console.log(personal[0]);
VM2150:1 Ajinkya
undefined
personal[0] = "Dada";
"Dada"
console.log(personal);
VM2206:1 (3) ["Dada", 12, "Chavan"]
undefined
personal.length;
3
personal.sort();
(3) [12, "Chavan", "Dada"]
personal[personal.length-1]
"Dada"
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
"<ul><li>Banana</li><li>Orange</li><li>Apple</li><li>Mango</li></ul>"
fruits.push("grapes");
5
console.log(fruits);
VM2518:1 (5) ["Banana", "Orange", "Apple", "Mango", "grapes"]
undefined