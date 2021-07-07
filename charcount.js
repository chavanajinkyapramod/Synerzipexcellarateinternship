/*function getCounts(string){
    const text = {};
    for(let i in string)
        text[string[i]] = (text[string[i]] || 0) + 1
    return text;
}

console.log(getCounts('Ajinkya Pramod Chavan'));
*/

const getOccurences = word =>
  word.split("").reduce((accumulator, currentValue) => {
    !accumulator.hasOwnProperty(currentValue)
      ? (accumulator[currentValue] = 1)
      : accumulator[currentValue]++;
    return accumulator;
  }, {});


console.log(getOccurences("ajinkya"));

