// document.getElementById("heading").addEventListener("mousemove",function(e){
//     let variable;
//     console.log("you have clicked the heading");
//     variable=e.target;
//     console.log(variable);
//     variable=e.target.className;
//     console.log(variable);
//     variable=e.target.classList;
//     console.log(variable);

//     variable= e.target.id;
//     console.log(variable);
//     variable=e.offsetX;
//     console.log(variable);
//     variable=e.offsetY;
//     console.log(variable);
//     variable=e.clientX;
//     console.log(variable);
//     variable=e.clientY;
//     console.log(variable);

//     e.preventDefault();

// location.href='//www.google.co.in//';

// e.preventDefault();


// });


//double click 
/* The purpose of a double click event is to triggers after two clicks on the same element within a short timeframe. This event is rarely used nowadays. Even when we use
 it, we should never use both an onclick and a dblclick event handler on the same HTML element. When the user double–clicks on an element,
 a one-click event takes place before the dblclick. This will cause a problem on the webpage. So, keep the clicks and dblclicks well separated to avoid complications. */



//  const myclick =document.querySelector('.formclass2');
//  myclick.addEventListener('dblclick',function(k){
//     console.log("Double click ever occur",k);

//  });

//  //mouseout 

//  const test =document.getElementById('myfirst');
//  test.addEventListener("mouseout", function (event){
//     event.target.style.color="red";
//     console.log(event);
//  });

 /* 
 Mouseenter and mouseleave:-
The mouseenter event is fired at an element when a mouse initially moved so that its hotspot is within the element at which the event was fired. Whereas the mouseleave event
 is fired at an element when the mouse or other pointing device is moved out of it. These events are similar, but the difference is that the mouseleave event is fired when the
  pointer has exited the element and all of its descendants. In contrast, the mouseout event is fired when the pointer leaves the element or leaves one of the elements' descendants
   even if the pointer is still within the element.
 */
   const mouseTarget = document.getElementById('myfirst');
   mouseTarget.addEventListener('mouseenter', function(e) {
   mouseTarget.style.border = '5px dotted blue';});

   const mouseTarget1 = document.getElementById('myfirst');
   mouseTarget1.addEventListener('mouseleave', function(e) {
   mouseTarget1.style.border = '1px solid red';
});


/* 
Mousedown and mouseup:-
The mousedown event is fired at an element when the pointing device like mouse button is pressed while the pointer is inside the element. Whereas,
 the mouseup event is fired at an element when a button on a pointing device is released while the pointer is located inside it.

There is a difference between click and mousedown event. As we know, that click event occurs after a full click action; that is, 
the mouse button is pressed and released while the pointer remains inside the same element. Whereas, the mousedown event is fired 
the moment the button is initially pressed.
*/
const myself=document.querySelector(".newclass");
myself.addEventListener('mousedown', function() {
    console.log("Mousedown event occur");
});
const myevent=document.querySelector(".newclass");
myevent.addEventListener('mouseup', function(e) {
    console.log("Mouseup event occur")
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})