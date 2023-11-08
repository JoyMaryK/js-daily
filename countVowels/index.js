function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const inputSentence = "joyyyyy is here.";
  
  console.log(countVowels(inputSentence));

  module.exports= countVowels