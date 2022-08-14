// Traversing the DOM
/* we know that all the operations on 
the DOM start with the document object.
 It is the main entry point, 
and we can access any node from it.  */

/* 
document -->document.documentElement ---->document.body  ----------->   parentNode -------------> <div>/chilNode ------>(connected to siblings like previous sibling,next sibling and also can find last child and first child)
                <HTML>                       (if inside body)     (eg:container,main,section)
*/

/*We can traverse the DOM in three directions,
 downwards, upwards and sideways. Each type of 
traversal uses a different method. */


// TRAVERSING DOWNWARDS

const component = document.querySelector('.child');
console.log(component);///parent

console.log(component.children);//children/child

const mylist =document.querySelectorAll('.child');
console.log(mylist[0]);
console.log(mylist[1]); //// selecting specific child

// TRAVERSING UPWARDS


console.log(mylist[0].parentElement);
console.log(mylist[1].parentNode);

// TRAVERSING SIDEWAYS

console.log(component.nextElementSibling); //next element sibling
console.log(component.nextElementSibling.nextElementSibling);


console.log(component.previousElementSibling); // previous element sibling
console.log(component.previousElementSibling.previousElementSibling);


/* 
Node Type:-
The nodeType property is an integer that identifies what the node is.
 It differentiate between different kind of nodes from each other, 
 such as elements, text and comments. The syntax is:

var type = node.nodeType;
It will return an integer which specifies the type of the node.

(Constant)                          (Value )             ( Description)

Node.ELEMENT_NODE                    1               An Element node like <h1> or <p>.
           
Node.ATTRIBUTE_NODE                  2               An Attribute of an Element.
            
Node.TEXT_NODE                       3               The actual Text inside an Element

Node.COMMENT_NODE                    8                A Comment node

Node.DOCUMENT_NODE                   9                A Document node.
                    
Node.DOCUMENT_TYPE_NODE              10                A DocumentType(<!DOCTYPE html>) node
         
Node.DOCUMENT_FRAGMENT_NODE          11             A DocumentFragment node.



*/

let a= document.querySelector('.container');
console.log(a.childNodes);
console.log(a.parentElement);
console.log(a.children);
console.log(a.childNodes[0].nodeName);
console.log(a.childNodes[13].nodeType);
console.log(a.childNodes[1].nodeName);
console.log(a.childNodes[1].nodeType);



console.log(a.children[2].children[0].children);

console.log(a.firstElementChild.parentNode);
console.log(a.firstElementChild.nextElementSibling);
console.log(a.firstElementChild.nextSibling);
console.log(a.firstElementChild.nextElementSibling.nextElementSibling);
console.log(a.firstElementChild.nextElementSibling.nextSibling);