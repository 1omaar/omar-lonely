
 
let input= document.getElementById('myInput')
let addBtn = document.querySelector('.addBtn')
let list = document.getElementById('myUl')

// add function 
function addToDo (){
    
    // get the input 
    let text= document.createTextNode(input.value)
    //create li
    let li =document.createElement('li')
    // add the text to the li
    li.appendChild(text)
    //add the li to the list 
    if(input.value) {
    list.appendChild(li);
    }else { alert("please enter an input")}
    //clear the input
    input.value =""
    // add the remove button 
    let removeBtn = document.createElement('button')
    //add the remove button to li
    li.appendChild(removeBtn);
    removeBtn.innerHTML='x';
    //remove btn
    removeBtn.addEventListener('click', function(){
        removeBtn.parentElement.remove();
    })
    // add a class to the remove btn
    removeBtn.setAttribute('class','removeBtn')
    //other methods 
    removeBtn.classList.add('removeBtn')
    //li styling
    li.addEventListener('mouseover',function(){
        li.style.backgroundColor='rgb(173,173,173)'
    })
    li.addEventListener('mouseout', function(){
        li.style.backgroundColor='#d9d9d9'
    })
}   
addBtn.addEventListener('click',addToDo)
