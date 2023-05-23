const {mostRepeated} = require('./index')

test('should return most repeated character',()=>{
  
    expect(mostRepeated('joymoy')).toEqual('o')
})
test('should return most repeated number', ()=>{
    expect(mostRepeated([1,2,2,3])).toEqual(2)
})
test('should remove spaces',()=>{
    expect(mostRepeated('  sighi  ')).toEqual('i')
})