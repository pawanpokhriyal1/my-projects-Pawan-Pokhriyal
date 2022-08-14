//create a new element

let divElem= document.createElement('div');

//add    text to that created element

let val=localStorage.getItem('text');

let text;

if (val==null)
{
    text = document.createTextNode('This is my elements  text which i want to add');

}

else
{
    text =document.createTextNode(val);
}

divElem.appendChild(text);


// give element id,style,and class

divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid blue; width:154px;margin:4px');

//grab the main container

let container=document.querySelector('.container');
let first =document.getElementById('myfirst');

//insert the element before element with id

container.insertBefore(divElem,first);


// add event listener to the divElem

divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;

    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;   
}});

//listen for the blur event on  textarea
let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        element.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });

