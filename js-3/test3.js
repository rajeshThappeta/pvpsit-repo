let product={
    productId:100,
    name:"TV",
    brand:"Sony"
}


//adv operations
    //get all keys
       let allKeys= Object.keys(product)
       console.log(allKeys)
    //get all values
        let allValues=Object.values(product)
        console.log(allValues)
    //freeze
        Object.freeze(product)
        product.mrp=500000;
        delete product.brand;
        console.log(product)