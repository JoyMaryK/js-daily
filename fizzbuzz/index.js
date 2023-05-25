function checkMultiples(no){
    // for(let i=1; i<=no;i++){
    //     console.log(i);
    // }
    if(no%3 == 0 && no%5 == 0){
        console.log("fizzbuzz");
        return
    }else if(no%3 == 0){
        console.log("buzz");
    }else if(no%5 == 0){
        console.log("fizz");
    } 

}

checkMultiples(7)

module.exports= checkMultiples