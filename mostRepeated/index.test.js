const {mostRepeated} = require('./index')



test('should return most repeated character',()=>{
  
    expect(mostRepeated('joymoy')).toEqual(['o','y'])
})
test('should return most repeated number', ()=>{
    expect(mostRepeated([1,2,2,3])).toEqual([','])//in progress
})
test('should remove spaces',()=>{
    expect(mostRepeated('  sighi  ')).toEqual([' '])
})