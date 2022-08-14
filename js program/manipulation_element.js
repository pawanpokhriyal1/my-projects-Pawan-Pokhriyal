console.log('ELEMENTS MANIPULATION');


//CREATING AN ELEMENT

let element = document.createElement('li');


// inserting text as Textnode or Using IINERTEXT/INNERHTML

// element.innerText='<b>hello this is innertext</b>';
element.innerHTML= '<b>hello this is innerhtml</b>';

let text= document.createTextNode(' hello this Text Node');
element.appendChild(text);

//adding class ,id  to the (li/elememt)  
  
element.className ='insertedclass';
element.id ='insertedid';


// adding attribute to new element which we are creating (attribute=> (name=value)pairs)
element.setAttribute('title','classbyattribute');


//finding and traversing through web page/html to locate a parent class to new element 
//li so that newly created li element can be appended after  last child

let parentul= document.querySelector('ul.this');
parentul.appendChild(element);

console.log(parentul);
console.log(element);


// another element created

let el2=document.createElement('img');
el2.id='img-id';
el2.className='img-class';
el2.setAttribute('src','/img1.png');


//Replacing element

element.replaceWith(el2);
console.log(parentul);
console.log(el2);

let myhead= document.getElementsByClassName('newclass');
// myhead.replaceChild(el2,document.getElementsByClassName('subclass2'));
// myhead.remove(document.getElementsByClassName('subclass4'));


console.log(element.hasAttribute('title'));
element.removeAttribute('id');
console.log(element);


let newel= document.createElement('h1');
newel.innerHTML='<h1>Go to Code With Pawan</h1>';


let newhead=document.querySelector('.newclass');

let newtag=document.createElement('a');
newtag.innerText='click';
newtag.setAttribute('href','//www.google.co.in//');
 
newel.appendChild(newtag);
newhead.appendChild(newel);
console.log(newel);








