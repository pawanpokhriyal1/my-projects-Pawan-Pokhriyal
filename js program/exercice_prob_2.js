// create the element to beinserted 
let mytarget= document.createElement('div');
mytarget.innerHTML=`<p class="sub1" contenteditable="true" onblur="blurfunction()">heading1</p>
<p class="sub2" contenteditable="true">heading2</p>
<p class="sub3" contenteditable="true">heading3</p>
<p class="sub4" contenteditable="true">heading4</p>
<p class="sub5" contenteditable="true">heading5</p>`;

//traversing to find the target location to inject 
myloca=document.querySelector("#heading");

myloca.appendChild(mytarget);


mytarget.setAttribute("onblur","blufunction()");

let myevent=document.getElementById("heading");
function blurfunction(elememt){
    console.log("blurevent",elememt);
    localStorage.setItem("mystorage",(mytarget.textContent));
    console.log(localStorage.getItem("mystorage"));
}

myevent.addEventListener("blur",blurfunction);

// mytarget.setAttribute("onblur","blufunction()");


// localStorage.setItem("mystorage",(mytarget.textContent));
// console.log(localStorage.getItem("mystorage"));
