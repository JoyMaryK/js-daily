const {reverseInt, createCounter, getLargest, twoDMatrix, removeNegatives} = require('./trials');

describe('tests for reverse int', ()=>{
    test('returns a number', () => {
        let result = reverseInt(23)
        expect(typeof result).toBe('number');
      });
    
    test('returns a negative for negative input', ()=>{
        let result = reverseInt(-23)
        expect(result).toBe(-32)
    })
    test('returns a positive for positive input', ()=>{
        expect(reverseInt(32)).toBe(23)
    })

})

describe('tests for each consecutive call to be +1', ()=>{
    test('should be -1 ',()=>{
        const counter = createCounter(10)
        expect(counter()).toBe(10)
        expect(counter()).toBe(11)
    })
    test('initial call should be the first value passed', ()=>{
        const counter = createCounter(50)
        expect(counter()).toBe(50)
    })

})

describe('tests for get largest', ()=>{
    test("should return largest no in an array", ()=>{
        expect(getLargest([2,8,6])).toEqual([8,6,2])
    })
})

describe('tests for adding column on a 2D matrix', ()=>{
    test('should add all elements of specified row', ()=>{
            expect(twoDMatrix(0)).toEqual(3)
    })
})

describe('tests for removing negatives',()=>{
    test('should remove all negative numbers',()=>{
        expect(removeNegatives([1,-2,5])).toEqual([1,5])
    })
})
