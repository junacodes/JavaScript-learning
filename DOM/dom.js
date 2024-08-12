const titleName = document.getElementById("title");
console.log(titleName)
console.log(titleName.innerText)
titleName.innerText = "HELLO WORLD"
console.log(titleName.innerText)
// console.log(titleName.innerC)
const contentName =document.getElementsByClassName("content")
console.log(contentName)
console.log(contentName[0].innerText)

const chatName = document.querySelector("#chat")
console.log(chatName)
console.log(chatName.innerText)
chatName.innerHTML = "Hello dear , <i>How</i> are you?"
const inputElement = document.querySelector("#myhour")
 console.log(inputElement.type);
 console.log(inputElement.value)
//  inputElement.type = "password";
 inputElement.value ="juna shrestha";
inputElement.style ="color:blue"
console.log(inputElement.getAttribute('style'))
inputElement.setAttribute('style','color:red')

const  newElement = document.createElement('div')
newElement.innerText = 'Hello, juna' 

const placeElement = document.querySelector('#placeElement')
placeElement.appendChild(newElement) 

function displayDate(){
    document.getElementById("demo").innerHTML = Date()
}


// function displayDate(){
//     alert(Date());
// }

function removeDate(){
    document.getElementById('demo').innerHTML = ''
}


const clickme =document.querySelector('#clickme');
clickme.addEventListener('click') =>{
    alert (juna shrestha);
}