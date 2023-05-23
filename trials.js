//string reversal
let mystr = "this is my string"

function reverse(input) {
    let reversed= ''
    for (char of input) {     
           reversed=char+ reversed   
    }
    console.log(reversed); 
}

// reverse(mystr)

//each successive function call returns n +1
var createCounter = function(n) {
    return function() {
       return n++
    };
};


const counter = createCounter(10)
//  console.log(counter()) 
//  console.log(counter()) 
//  console.log(counter()) 

// reverses an integer 
function reverseInt(input){
    let absolute = Math.abs(input)
    let reversed = absolute.toString().split('').reverse().join("") 
   if (input>0){
    return +reversed
   }
    return -Math.abs(+reversed)
    }
   // console.log(reverseInt(-10)); 
   // console.log(reverseInt(10)); 
    

   //print even numbers from 1-10
   const evenNos=(input)=>{
    let arr =[]
    for(let i =1; i<=input; i++){
        if (i%2 === 0){
            arr.push(i)   
        }
    }
    console.log(arr);
    return arr
   }

//evenNos(5)

//print math table

const mathTable=(noInp)=>{
    let no = noInp

  // inside=()=>{
    while (no>0){
        for(let i=0; i<10; i++){
            console.log(i+" X "+ no+ ' = '+ i*no);
        }
        
       console.log("-----------"); 
       no--
    }
        
  //  }

 //inside()
 //inside()
 //inside()
}

function printTimeTables(start, end, multiplier) {
    for (let i = start; i <= end; i++) {
        console.log(`Time Table for ${i}:`);
        for (let j = 1; j <= multiplier; j++) {
            let result = i * j;
            console.log(`${i} x ${j} = ${result}`);
        }
        console.log(); // Add an empty line between tables
    }
}

// Usage
//printTimeTables(1, 7, 10);

//mathTable(5)

// basic conversion
function cmtomm(){
    let cm = 30
    console.log(cm*100);
    return cm* 100
}

//cmtomm()

/// sum of numbers within an array 

function arraySum (...input){
    
   const sth= input.reduce((prev,curr)=>{ return prev+curr},0)
    console.log(sth);
    return sth
}

//arraySum(1,2)
function twoDMatrix(){
    const matrix = [
        [1,2],
        [3,4]
    ]
       let row = matrix[0]
      
           const rowSum= row.reduce((prev,curr)=>{ return  prev+curr},0)
    return rowSum
        }
   
//twoDMatrix()

const getLargest=(input)=>{
    let arr=input
    let other = []
    while (arr.length){
        let largest = arr.reduce((prev,curr)=>{ if (prev>curr) {return prev} return curr}, o)
        other.push(largest)
        arr.splice(arr.indexOf(largest),1)
    }
    console.log(other);
    return other
}
//getLargest([2,5.1,5.12])


const removeNegatives =()=>{
let arr=[9,5,-2, 5, -9]
arr.map((each)=>{
    if (each<0){
        arr.splice(arr.indexOf(each),1)
    }
})
console.log(arr);
}
//removeNegatives()

function removeSpaces(){
    let mine ='you got this !'
    splitted = mine.split('')
    splitted.map((each)=>{
        if (each===" ") {
            splitted.splice(splitted.indexOf(each),1) 
        }
    }) 
    last = splitted.join('')
    console.log(last);
}

//removeSpaces()
function vowelsNo(){
    let mine ='you got this !'
    let counter = 0
    splitted = mine.split('')
    splitted.map((each)=>{
        if (each==="a" || each==="e" || each==="o" || each==="u" || each==="i") {
            counter++
        }
    }) 
    
    console.log(counter);
}

//vowelsNo()


const arrsplit=(arr,chunk)=>{
   
    let other = []
    let start=0
    while (start<arr.length){
        other.push(arr.slice(start, start+chunk))
        start+=chunk
    }
    console.log(other);
    return other
   
}


//arrsplit([1,2,3,4],2)


function mostRepeated(){
    let mine ='11234'
    let counter = 0
    splitted = mine.split('')
 

    console.log(counter);
   
}

mostRepeated()
module.exports = {reverseInt ,createCounter , getLargest}