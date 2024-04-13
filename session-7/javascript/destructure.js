
//packing elements to  an array
let usernames=['ravi','madhu','seetha']

//unpacking
let [user1,user2,user3]=usernames;
console.log(user1)
console.log(user2)
console.log(user3)

//packing properties to an object
let product={
    pid:100,
    name:'TV',
    brand:'sony'
}

//unpack
let {brand}=product;


//console.log(pid)
//console.log(name)
console.log(brand)
