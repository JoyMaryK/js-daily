function steps(no){
    if(no<0){
        console.log("invalid");
    }
    let hash="#"
    let space=" "
    for (let index = 1; index <= no; index++) {   
        console.log(hash.repeat(index)+ space.repeat(no-index)); 
    }  
}
steps(3)

module.exports = steps