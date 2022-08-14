/*
Local & Session storage in JavaScript | JavaScript Tutorial In Hindi #20
Web applications can store data locally within the user's browser with web 
storage. Before HTML5, application data stored in cookies, included in every 
server request. But with the Advent of Html5, we have got various options to 
store information on the client browser. Previously we were having only cookies,
 which were very restrictive, and the size of the cookies was very small. But now 
 the web storage is more secure, and large amounts of data can be stored locally, 
 without affecting website performance. We have local storage and session storage.
  We can access the web storage by right-clicking on the webpage and then selecting 
  option applications. Here we can see the option of local and session storage. Let's 
  talk about all these web storage in detail.



*/


// HTML web storage provides us with two objects for storing data:

// window.localStorage – It stores the data with no expiration date
// window.sessionStorage -It stores the data for one session. That 
// means the data is lost when the browser tab is closed.



//Local Storage

/* 
The way to store data on the client's computer is by local storage. 
The local storage allows us to save the key/value pairs in a web browser, 
and it stores data with no expiration date. We can access local storage via 
JavaScript and HTML5. However, the user can clear the browser data to erase 
all localStorage data.

 */





// Session storage
/* 
The session storage is used to store data only for a session, meaning that it is
 stored until the browser (or tab) is closed. Remember that, in session storage,
 the data is never transferred to the server and can only be read on the client-side. 
  The storage limit is between 5-10MB. By opening multiple windows or tabs with the same 
  URL creates sessionStorage for each tab or window.

*/

// creating Entries


//add a key value pair inside local storage

localStorage.setItem('Name','Harry');
localStorage.setItem('Name1','Raman');

//retrieve an item for local storage

console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('Name1'));

// creating entries for array of string
let impArray =['java','python','c++'];

localStorage.setItem('programlang',JSON.stringify(impArray));
console.log(JSON.parse(localStorage.getItem('programlang')));

//add a key value pair inside session storage

sessionStorage.setItem('sessionkey1','explore the session 1');

sessionStorage.setItem('sessionkey2','explore the session 2');

console.log(sessionStorage.getItem('sessionkey1'));
console.log(sessionStorage.getItem('sessionkey2'));






