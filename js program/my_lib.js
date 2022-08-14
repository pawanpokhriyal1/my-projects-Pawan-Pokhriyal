let Book_List=["js","c","c++","fortran","java","python","html","os","react","node.js","php","mongoDb","redis","vue","kotlin","css","bootstrap"];

class College_Library{
    constructor(givenBookList,givenDepartment ){
        this.Book_List=givenBookList;
        this.Department=givenDepartment;
    }
    
    getBook_List(){
        let html="";
        console.log("please find the details of the books available below");
        for (let i=0;i<this.Book_List.length;i++){
            html+=`<li>Book no. ${i+1} of ${this.Department} is : ${this.Book_List[i]}</li>`;
            document.getElementById("add-list").innerHTML=html;
            
        }
    }

    issue_Book(bookname,user){
        let i;
        for(i=0;i<this.Book_List.length;i++){
            if(bookname===this.Book_List[i]){
                this.Book_List.splice(i,1)
                console.log(`${user} has been issued with the book : ${bookname}`)
            }
        }
        
        
    
    }

    return_Book(bookname,user){
        this.Book_List.push(bookname);
        console.log(`${user} has returned the book :${bookname}`);
        console.log("after return the available books list is Following");
        this.getBook_List() ;
    
    }
    
}



let my_Library=new College_Library(Book_List,"ComputerScience");
console.log(my_Library);
my_Library.getBook_List();
let b=document.getElementById("book-input").value;
let u=document.getElementById("user-input").value;

my_Library.issue_Book(b,u);
my_Library.return_Book(document.getElementById("book-input").value,document.getElementById("user-input").value);