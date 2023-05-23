function mostRepeated(input) {
  let value
  if(typeof(input)=='object'){
    value = input.toString().split(',')
  }else{
    value = input.toString().trim();
  }
 
  let charCount = {};
  for (let i = 0; i < value.length; i++) {
    let char = value[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  let mostAppearingChar = "";
  let count = 0;
  for (let char in charCount) {
    if (charCount[char] > count) {
      mostAppearingChar = char;

      count = charCount[char];
    }
  }
 if  (typeof(input)=='object' ){ return +mostAppearingChar} return mostAppearingChar

}
module.exports = { mostRepeated };
