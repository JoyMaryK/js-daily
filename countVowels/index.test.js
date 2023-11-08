const countVowels = require('./index')

test('should return number of vowels', ()=>{
    expect(countVowels('joymoy')).toEqual(2)
})
test('Count vowels in a sentence without vowels', () => {
    const sentence = 'Brr! Tsk!';
    const result = countVowels(sentence);
    expect(result).toBe(0); 
  });
