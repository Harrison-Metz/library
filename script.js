const myLibrary = [
    
];

const book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    let new_book = new book(title, author, pages, read);
    myLibrary.push(new_book);
}

const container = document.getElementById('book-container');

function createCard(array, index){
    const card = document.createElement("div");
    card.className = 'card';
    const title = document.createElement('p');
    title.innerHTML = `TITLE: ${array[index].title}`;
    const author = document.createElement('p');
    author.innerHTML = `AUTHOR: ${array[index].author}`;
    const pages = document.createElement('p');
    pages.innerHTML = `PAGES: ${array[index].pages}`;
    const read = document.createElement('p');
    read.innerHTML = `READ: ${array[index].read}`;
    card.append(title, author, pages, read);
    container.appendChild(card);
}

function displayBooks(array){
    for(let i = 0; i < array.length; i++){
        createCard(array, i);
    }
}

displayBooks(myLibrary);

const addButton = document.querySelector('.add-button');
const dialog = document.querySelector('.popup-form');
const titleIn = document.querySelector('#title');
const authorIn = document.querySelector('#author');
const pagesIn = document.querySelector('#pages');
const readIn = document.querySelector('#read');
const submitButton = document.querySelector('#submit-button');

addButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", () => {
    addBookToLibrary(titleIn.value, authorIn.value, pagesIn.value, readIn.value);
    console.log(myLibrary);
    createCard(myLibrary, myLibrary.length-1);
    
    dialog.close();
});

const print = document.querySelector('header button');
print.addEventListener('click', () => {
    console.log(myLibrary);
})
