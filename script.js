const library = document.querySelector('#library');

const myLibrary = [];


function Book(name, author, pages, read, index) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

    this.createBook = function(){
        const bookPlaced = document.createElement("div");
        bookPlaced.classList.add('bookPlaced');
        library.appendChild(bookPlaced); //append book to Library
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('deleteButton');
        bookPlaced.appendChild(deleteButton);//append button to book
        deleteButton.textContent = 'X'

        deleteButton.addEventListener("click", () => {
            delete myLibrary[this.index];
            bookPlaced.remove();
            console.log('it works!' + this.index);
            console.log(myLibrary);
            console.log(myLibrary.length)
        });
    }


    
    // add function here to delete the book when button pressed

}

function addBooktoLibrary(name, author, pages, read, index) {
    const newBook = new Book(name, author, pages, read, index);
    myLibrary.push(newBook);

    
    for (let book of myLibrary) {
        book.createBook();
    }
}




const mybook1 = new Book('myBook', 'anon', 234, true, myLibrary.length);

myLibrary.push(mybook1);

addBooktoLibrary('adfadf', 'asdfa', 23, false, myLibrary.length);


console.log(myLibrary);


console.log('asfd' + myLibrary[0]);




/*
Pseudo code:

have an object with constructor...

have this form, and when submitted creates a new book
then store it in the array
*/
