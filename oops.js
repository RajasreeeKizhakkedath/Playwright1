//Create a class "Library". Use attributes bookid, name, author,genre,isAvailableNow. Display the attribute details for 2 objects each//
class Library {
    constructor(bookid,name,author,genre,isAvailableNow){
        this.bookid  =bookid;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.isAvailableNow = isAvailableNow;
    }
    displaydetails() {
    console.log(this.bookid);
    console.log(this.name);
    console.log(this.author);
    console.log(this.genre);
    console.log(this.isAvailableNow);
}
}


const book1 = new Library(1,"vanka","R.K.Narayan","Fiction",true);
const book2 = new Library(2,"The Alchemist","Paulo Coelho","Adventure",false);
book1.displaydetails();
book2.displaydetails();
