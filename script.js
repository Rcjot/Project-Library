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

class Book {
    constructor (name, author, pages, read, index) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }
    createDom() {
        this.bookPlaced = document.createElement("div");
        this.bookPlaced.classList.add('bookPlaced');

        this.deleteButton = document.createElement("button");
        this.deleteButton.classList.add('deleteButton'); // .deleteButton
        this.deleteButton.textContent = 'delete Book'
        this.deleteButton.addEventListener("click", () => {
            delete myLibrary[this.index];
            this.bookPlaced.remove();
            console.log('it works!' + this.index);
            console.log(myLibrary);
            console.log(myLibrary.length)
        });

        this.readCheckBox = document.createElement('input');
        this.readLabel = document.createElement('label');
        this.readLabel.htmlFor = 'readCheckBox';
        this.readLabel.appendChild(document.createTextNode('finished'));
        this.readCheckBox.setAttribute('type', 'checkbox');
        this.readCheckBox.classList.add('bookread1');
        this.readCheckBox.checked = this.read;

        this.bookPlacedName = document.createElement('h1');
        this.bookPlacedAuthor = document.createElement('p');
        this.bookPlacedPages = document.createElement('p');
        this.checklabeldiv = document.createElement('div');
        this.checklabeldiv.classList.add('checklabeldiv');
    }
    appendDom(){
        currentlibrarycontainer.appendChild(this.bookPlaced); //append book to Library
        this.bookPlacedName.textContent = this.name;
        this.bookPlacedAuthor.textContent = 'by ' + this.author;
        this.bookPlacedPages.textContent = this.pages + ' pages';
        this.bookPlaced.appendChild(this.bookPlacedName)
        this.bookPlaced.appendChild(this.bookPlacedAuthor)
        this.bookPlaced.appendChild(this.bookPlacedPages)
        this.checklabeldiv.appendChild(this.readLabel);
        this.checklabeldiv.appendChild(this.readCheckBox);
        this.bookPlaced.appendChild(this.checklabeldiv);
        this.bookPlaced.appendChild(this.deleteButton);//append button to book
    }
    createBook() {
        this.createDom();
        this.appendDom();
    }
}




// function Book(name, author, pages, read, index) {
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.index = index;

//     this.createBook = function(){

//         const bookPlaced = document.createElement("div");
//         bookPlaced.classList.add('bookPlaced');
//         currentlibrarycontainer.appendChild(bookPlaced); //append book to Library
//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add('deleteButton'); // .deleteButton
        
//         deleteButton.textContent = 'delete Book'
//         deleteButton.addEventListener("click", () => {
//             delete myLibrary[this.index];
//             bookPlaced.remove();
//             console.log('it works!' + this.index);
//             console.log(myLibrary);
//             console.log(myLibrary.length)
//         });
//         const readCheckBox = document.createElement('input');
//         const readLabel = document.createElement('label');
//         readLabel.htmlFor = 'readCheckBox';
//         readLabel.appendChild(document.createTextNode('finished'));
//         readCheckBox.setAttribute('type', 'checkbox');
//         readCheckBox.classList.add('bookread1');
//         readCheckBox.checked = this.read;
//         const bookPlacedName = document.createElement('h1');
//         const bookPlacedAuthor = document.createElement('p');
//         const bookPlacedPages = document.createElement('p');
//         const checklabeldiv = document.createElement('div');
//         checklabeldiv.classList.add('checklabeldiv');
//         bookPlacedName.textContent = this.name;
//         bookPlacedAuthor.textContent = 'by ' + this.author;
//         bookPlacedPages.textContent = this.pages + ' pages';
//         bookPlaced.appendChild(bookPlacedName)
//         bookPlaced.appendChild(bookPlacedAuthor)
//         bookPlaced.appendChild(bookPlacedPages)
//         checklabeldiv.appendChild(readLabel);
//         checklabeldiv.appendChild(readCheckBox);
//         bookPlaced.appendChild(checklabeldiv);
//         bookPlaced.appendChild(deleteButton);//append button to book
        
//     }
// }

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
