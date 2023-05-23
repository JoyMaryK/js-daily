function capitalize(input){
    let split= input.trim().split(" ")
    let other = []
    for (let each of split) {
     let heh= each.split('')
      other.push( each.charAt(0).toUpperCase()+ heh.slice(1,heh.length).join(''))
    }
   
    return other.join(' ')
}

console.log(capitalize("   digh"));
module.exports= {capitalize}