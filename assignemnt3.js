//create a class "library" with attributes "bookid,bookname,authore,genre".write a display function for attributes.create another class StudentManagement and inherit the data from "library" add 3  more attributes studentid,isborrowed gives true .display studentid,bookname.genre

class Library {
 constructor (bookid,bookname,author,genre)
{
    this.bookid = bookid;
    this.bookname = bookname;
    this.author = author;
    this.genre = genre;
}
 
 displayLibrary(){
    console.log(this.bookid);
    console.log(this.bookname);
    console.log(this.author);
    console.log(this.genre);

 }
}

class Studentmanagement extends Library{
    constructor(bookid,bookname,author,genre,studentid,isborrowed,isreturned){
        super(bookid,bookname,author,genre)
        this.studentid=studentid;
        this.isborrowed=isborrowed;
        this.isreturned=isreturned;
    }
    displayStudentLibrary(){
        console.log(this.studentid);
        console.log(this.isborrowed);
        console.log(this.isreturned);
        super.displayLibrary()
    }
}
const student= new Studentmanagement(1,"vanka","Anton Chekhov","short story",11,true,true)
student.displayStudentLibrary()
