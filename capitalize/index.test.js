const {capitalize} = require('./index')

test('should capitalize first letter of each word',()=>{
    let result = capitalize("this is a test")
    expect(result).toEqual('This Is A Test')
})
test('should return a string', ()=>{
    expect(typeof capitalize('sigh')).toBe("string")
})
test('should work even with spaces in input',()=>{
    expect(capitalize('  sigh  ')).toEqual('Sigh')
})