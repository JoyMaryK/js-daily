const checkMultiples = require('./index')

test('should log fizz when input is divisible by 5', ()=>{
    const consoleSpy = jest.spyOn(console, 'log');
    checkMultiples(10)
    expect(consoleSpy).toHaveBeenCalledWith('fizz')
    consoleSpy.mockRestore();
})


test('should log fizzbuzz when input is divisible by 3 and 5', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    checkMultiples(15)
    expect(consoleSpy).toHaveBeenCalledWith('fizzbuzz')
    consoleSpy.mockRestore();;
  });
  
  test('should log buzz when input is divisible by 3', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    checkMultiples(9)
    expect(consoleSpy).toHaveBeenCalledWith('buzz')
    consoleSpy.mockRestore();;
  });