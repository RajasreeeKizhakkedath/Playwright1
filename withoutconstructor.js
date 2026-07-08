// setter functions -to assign the values to the class//
//class without constructor//
class library{
    setDetails(bookid,name,author,genre,isAvailableNow){
        this.bookid  = bookid;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.isAvailableNow = isAvailableNow;
    }
    displayBookdetails() {
    console.log(this.bookid);
    console.log(this.name);
    console.log(this.author);
    console.log(this.genre);
    console.log(this.isAvailableNow);   
    }
}
const book1 = new library();
book1.setDetails(1,"vanka","R.K.Narayan","Fiction",true);
book1.displayBookdetails();



//With constructor -object creation time value pass cheyyunnu//
class Library {
    constructor(bookid, name, author, genre, isAvailableNow) {
        this.bookid = bookid;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.isAvailableNow = isAvailableNow;
    }

    displayBookdetails() {
        console.log(this.bookid);
        console.log(this.name);
        console.log(this.author);
        console.log(this.genre);
        console.log(this.isAvailableNow);
    }
}

const book1 = new Library(
    1,
    "Vanka",
    "R.K.Narayan",
    "Fiction",
    true
);

book1.displayBookdetails();