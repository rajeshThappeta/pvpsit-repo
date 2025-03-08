//Advanced operations on Array

let arr=[9,100,-23,67,54,900,189]

    //filter (selection)
        //get elements less than 50(manual)
        let result=[];
        for(let element of arr){
            if(element<50){
                result.push(element)
            }
        }

        console.log(result)

        //using filter method
        let result1=arr.filter((element)=> element<50)

        //find even numbers of arr using filter method
        let even=arr.filter(element=>element%2===0)
        
        console.log(even)


        //map(modification)
            //add 2 for each element
           let newArr= arr.map(element=>element+2)
            console.log(newArr)

        //add 2 for even numbers and 5 for odd numbers
        let modifiedArr=arr.map((element)=>{
            if(element%2===0){
                return element+2;
            }else{
                return element+5;
            }
        })


        console.log(modifiedArr)



        //forEach(iterate)
            arr.forEach((element,index)=>{
                console.log(element)
                console.log(index)
            })

            //increment element by 50 if it at even indeces


            //find
               let searchResult= arr.find(element=>element===100)
               console.log(searchResult)
            //findIndex
            let searchIndex= arr.findIndex(element=>element===10)
            console.log(searchIndex)

           
            //reduce
                //sum of elements
           let sum= arr.reduce((accumulator,element)=>accumulator+element)
           console.log(sum)

           // find small
           let small=arr.reduce((acc,element)=>acc<element?acc:element)
           console.log(small)