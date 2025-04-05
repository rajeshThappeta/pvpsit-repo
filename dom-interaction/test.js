console.log(document)

//access DOM element
let h1element=document.querySelector('.two')
let heading2=document.querySelector(".one")

//add event handlers
h1element.addEventListener('click',()=>{
    //change content
    h1element.textContent='Web development'
    //change styles
    h1element.style.color='red'
    h1element.style.backgroundColor='yellow'
    h1element.style.textAlign='center'
    h1element.style.fontSize='4rem'
})

//add new elements to a parent element
let parent=document.querySelector(".parent")

//add h2 and p elements as children to this parent
let h2=document.createElement('h2')
let p=document.createElement('p')
//add content to these element
h2.textContent='MERN stack'
p.textContent='This JS full stack '

parent.appendChild(h2)
parent.appendChild(p)

//add h4 element
parent.innerHTML+=`<h4>This is H4 element</h4>`

//access children
let allChildren=parent.children;
//access first child
let firstChild=parent.firstElementChild
//access last child
let lastChild=parent.lastElementChild
//access any child with index
allChildren[0]


//access parent 
let parentElement=h1element.parentElement
console.log(parentElement)

//find siblings
console.log(h1element.nextElementSibling)
console.log(h1element.previousElementSibling)


//remove elements
heading2.remove()

//remove child of a parent
parent.removeChild(parent.children[0])



