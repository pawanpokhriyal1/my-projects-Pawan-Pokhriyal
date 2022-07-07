// SINGLE ELEMENT SELECTOR

      //ACCESSING ELEMENT BY ID:-
    //   To access the single element in the DOM is by its unique ID. We can get or modify an element by ID 
    // with the getElementById() method of the document object. It will return null if no elements with the specified ID exists.

    //   An ID should be unique within a page. However, if more than one element with the specified ID exists, 
    // the getElementById() method returns the first element in the source code.

      

     
      var x= document.getElementById('myfirst');
      
      x.style.color='red';
      x.className;
      console.log(x.className);

      x.childNodes;
      console.log(x.childNodes);
      
      x.parentNode;
      console.log(x.parentNode);

    //   x.innerText='javascript';
      
    //   x.innerHTML='<P>THIS IS ELEMENT INSERTION USING JASVASCRIPT</P>';
      

        //querySelector:-\
         /* 
         It will return the first element that matches the specified CSS selector in the document. The querySelector() method only returns the first element 
         that matches the specified selectors.
         The above statement will return the first element that matches the CSS selector #myclass, .myclass and li. We can use all kinds of CSS selectors within
          the querySelector method.
         */


    let sel=document.querySelector('#formid');
    console.log(sel);
    sel=document.querySelector('.child');
    console.log(sel);
    sel=document.querySelector('li');
    console.log(sel);


    

// MULTIPLE ELEMENT SELECTORS
/* 
It is used to select multiple HTML elements within a
 document. 
There are three ways in which we can select elements
 in a DOM using multiple
 element selectors.

querySelectorAll()
getElementsByTagName()
getElementsByClassName()

*/    


     //querySelectorAll:-
     /* It will return a list of the document's 
     elements that match the specified group of 
     selectors. 
     The querySelectorAll() method returns all
      elements in the document as a static NodeList
       object.
     The NodeList object represents a collection 
     of nodes. The nodes can be accessed by index
      numbers. 
     The index starts at 0. 
     
     It will return a list of all elements that 
     matches the specified CSS selector. 
     */

     let q= document.querySelectorAll('div');
     console.log(q);


     /*Accessing Elements by Tag Name:-
    We can also select HTML elements with their
     tag name by using getElementsByTagName() method. 
    This method returns an array-like object of 
    all child elements with the given tag name. 
    The syntax is: 
    document.getElementsByTagName(tagname); */



    /*Accessing Elements by Class:-
    The class attribute is used to access one or more 
    specific elements in the DOM. The ID should be unique,
    whereas one or more elements can have the same class.
     Using getElementsByClassName() method., we can get all the elements with a given class name.  */


     console.log(q[0].getElementsByClassName('child'));
     console.log(q[0].getElementsByTagName('h1'));
    //  q= document.querySelectorAll('.child');
    //  console.log(q);

     for (let index = 0; index < q.length; index++) {
        const element = q[index];
        console.log(element);
        element.style.color='red';
        
     }


    Array.from(q).forEach(element =>{
        console.log(element);
        element.style.color='blue';
    })
    