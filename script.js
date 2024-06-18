const library = document.querySelector('#library');
const bookname = document.querySelector('#bookname');
const bookauthor = document.querySelector('#bookauthor')
const bookpages = document.querySelector('#bookpages')
const bookread = document.querySelector('#bookread')
const submit = document.querySelector('#submit')
const form = document.querySelector('form');
const initialLibraryContainer = document.createElement('div');
library.appendChild(initialLibraryContainer);
let currentlibrarycontainer = initialLibraryContainer; //initialize currentLibraryContainer
const myLibrary = [];

submit.addEventListener("click", (event) => {
    if (!form.checkValidity()) return 1;
    let name = bookname.value;
    let author = bookauthor.value;
    let pages = bookpages.value;
    let read = bookread.checked;
    let index = myLibrary.length;
    addBooktoLibrary(name, author, pages, read, index);
    dialog.close();
    bookname.value = '';
    bookauthor.value = '';
    bookpages.value = '';
    bookread.checked = false;
})



function Book(name, author, pages, read, index) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;

    this.createBook = function(){

        const bookPlaced = document.createElement("div");
        bookPlaced.classList.add('bookPlaced');
        currentlibrarycontainer.appendChild(bookPlaced); //append book to Library
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
        const readCheckBox = document.createElement('input');
        const readLabel = document.createElement('label');
        readLabel.htmlFor = 'readCheckBox';
        readLabel.appendChild(document.createTextNode('Read'));
        readCheckBox.setAttribute('type', 'checkbox');
        readCheckBox.checked = this.read;
        bookPlaced.appendChild(readLabel);
        bookPlaced.appendChild(readCheckBox);
        
    }
}

function addBooktoLibrary(name, author, pages, read, index) {
    const newBook = new Book(name, author, pages, read, index);
    myLibrary.push(newBook);

    currentlibrarycontainer.remove(); //remove currentLibrary to update library
    const librarycontainer = document.createElement("div"); //make new library with new books
    librarycontainer.classList.add('libraryContainer');
    currentlibrarycontainer = librarycontainer;
    library.appendChild(currentlibrarycontainer);

    for (let book of myLibrary) {
        if (typeof book === 'undefined') continue;
        book.createBook();
        
        
    }
}





// const mybook1 = new Book('myBook', 'anon', 234, true, myLibrary.length);
// myLibrary.push(mybook1);
// addBooktoLibrary('adfadf', 'asdfa', 23, false, myLibrary.length);
// console.log(myLibrary);
// console.log('asfd' + myLibrary[0]);

// modal creation
const modalbutton = document.querySelector('#clickme');
const dialog = document.querySelector("dialog");
const closebutton = document.querySelector("dialog #closedlg");

modalbutton.addEventListener("click", () => {
    dialog.showModal();
})

closebutton.addEventListener("click", () => {
    dialog.close();
})


/*
Pseudo code:

have an object with constructor...

have this form, and when submitted creates a new book
then store it in the array
*/
