// class student
//class Grade
// grade  need student class access
// inheritance is a concept where a class can inherit properties and methods from another class 
// reusing code is possible with inheritance
/*
Grade -> student class accessed
Grade ::: child class/sub class/ Derived class
student ::: parent class/super class/base class
content shared between parent and child class
shared content is called inheritance
extends keyword is used to inherit the properties and methods of parent class to child class
class Grade extends student
in extends left side child class and right side parent class
there is diffrenet types of inheritance
1. single inheritance:
 one child class inherits from one parent class
 1 parent class and 1 child class

2. multiple inheritance: 
Multiple inheritance is a feature of some object-oriented programming languages in which a class can inherit behaviors and features from more than one parent class. This is in contrast to single inheritance, where a class can only inherit from one parent class.
A,B->C
More than one parent class can be inherited by a child class
More than 1 parent class -> single child class

3. multilevel inheritance :
A->B,B->C, A->C
here A is parent class of B and B is parent class of C, so A is also parent class of C
here B is child class of A and parent class of C, so B is also child class of A
B is both child and parent class


4. hierarchical inheritance :
one parent class and more than one child class(multiple child classes)
A->B
A->C
A->D    

5. hybrid inheritance:
Single inheritance + multiple inheritance + multilevel inheritance + hierarchical inheritance
A->B
A->C
A->D
B->E
C->E
D->E

if any two or more types of inheritance are combined then it is called hybrid inheritance
*/
class Student{
constructor(name,rollno,age){
this.name = name;
this.rollno = rollno;
this.age = age;
}
displayStudentDetails(){
    console.log("Name:",this.name);
    console.log("Roll No:",this.rollno);    
    console.log("Age:",this.age);
}
}
/**it's a parent class */

class Grade extends Student //child class 
{
    constructor(name,rollno,age,grade,height){
        super(name,rollno,age); //super keyword is used to call the constructor of parent class ...to access the properties of parent class in child class
        this.grade = grade;
        this.height = height;
    }
    displayStudentDetails(){
        console.log("grade:",this.grade);
        console.log("height:",this.height);
        super.displayStudentDetails(); //super keyword is used to call the method of parent class ...to access the methods of parent class in child class
    }

}
const student1 = new Grade("John",101,20,"A",5.9)
student1.displayStudentDetails();


//Multi level inheritance
class Books{
    constructor(bookname, author, genre){
        this.bookname = bookname;
        this.author = author;
        this.genre = genre;
    }
    displayBookDetails(){
        console.log("Book Name:",this.bookname);
        console.log("Author:",this.author);
        console.log("Genre:",this.genre);
    }
}
class Library extends Books{
    constructor(bookname,author,genre,bookid,section){
        super(bookname,author,genre);
        this.bookid = bookid;
        this.section = section;

    }
    displayLibraryDetails(){
        console.log("Book Details:");
        console.log("Bookid:",this.bookid);
        console.log("section:",this.section);
        
        super.displayBookDetails();
    }
}
class student extends Library{
    constructor(bookname,author,genre,bookid,section,name,rollno){
        super(bookname,author,genre,bookid,section);
        this.name = name;
        this.rollno = rollno;
    }
    diplayLibraryStudentDetails(){
        super.displayLibraryDetails();
        console.log("Student Details:");
        console.log("Student Name:",this.name);
        console.log("Student Roll No:",this.rollno);    
    }
}
const studentobject = new student("The Alchemist","Paulo Coelho","Adventure",1,"Fiction","John",101);
studentobject.diplayLibraryStudentDetails();


