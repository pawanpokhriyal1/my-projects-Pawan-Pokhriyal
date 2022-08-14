let Book_List=["js","c","c++","fortran","java","python","html","os","react","node.js","php","mongoDb","redis","vue","kotlin","css","bootstrap"];

class College_Library{
    constructor(givenBookList,givenDepartment ){
        this.Book_List=givenBookList;
        this.Department=givenDepartment;
    }
    
    getBook_List(){
        let i;
        console.log("please find the details of the books available below");
        for (i=0;i<this.Book_List.length;i++){
            console.log(`Book no. ${i+1} of ${this.Department} is : ${this.Book_List[i]}`);
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
        console.log("after issuing the available books list is Following");
        this.getBook_List();
    
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
my_Library.issue_Book("c","raman");
my_Library.return_Book("c","raman");