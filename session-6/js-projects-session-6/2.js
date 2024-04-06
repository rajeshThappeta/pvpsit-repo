//array
let names=['ravi','suresh'];

//read an element
console.log(names[0])
console.log(names[1])
console.log(names[3])

//iterate array
let elements=[10,20,30,40,50];

let sum=0;
for(let index=0;index<elements.length;index++){
    sum=sum+elements[index]
}
console.log(sum)

//for-of
for(let element of elements){
    console.log(element)
}

//insert new name
    //at start
    names.unshift('bhanu','manasa')
    console.log(names)
    //at end
    names.push('vikas','mahesh')
    console.log(names)
    //in between
    names.splice(10,0,'test')
    console.log(names)


//delete elements
    //at start
    names.shift()
    console.log(names)
    //at end
    names.pop()
    console.log(names)
    //in between
    names.splice(3,2)
    console.log(names)

//modification
    names.splice(2,1,'hello')
    console.log(names)
