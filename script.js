const myLibrary = [];

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
    return new_book.id;
}

const container = document.getElementById('book-container');

function createCard(title, author, pages, read, id){
    const card = document.createElement("div");
    card.className = 'card';
    card.setAttribute('data-book-id', id);
    const titleP = document.createElement('p');
    titleP.innerHTML = `TITLE: ${title}`;
    const authorP = document.createElement('p');
    authorP.innerHTML = `AUTHOR: ${author}`;
    const pagesP = document.createElement('p');
    pagesP.innerHTML = `PAGES: ${pages}`;
    const readContainer = document.createElement('div');
    readContainer.className = 'read-container';
    const readP = document.createElement('p');
    readP.innerHTML = `READ: ${read}`;
    const readBtn = document.createElement('button');
    readBtn.innerHTML = 'Change';
    readContainer.append(readP, readBtn);
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.className = 'removeBtn'

    removeBtn.addEventListener('click', function(event){
        const parent = event.target.parentNode;
        const id = parent.dataset.bookId
        const index = myLibrary.findIndex(item => item.id === id);
        myLibrary.splice(index, 1);
        displayBooks(myLibrary)
        console.log(myLibrary);
    });

    card.append(titleP, authorP, pagesP, readContainer, removeBtn);
    container.appendChild(card);
}

function displayBooks(array){
    container.innerHTML = '';
    for(let i = 0; i < array.length; i++){
        createCard(array[i].title, array[i].author, array[i].pages, array[i].read);
    }
}

const addButton = document.querySelector('.add-button');
const dialog = document.querySelector('.popup');
const form = document.querySelector('#book-form');
const closeButton = document.querySelector('#close-button');

addButton.addEventListener("click", () => {
    dialog.showModal();
});

function processForm(event){
    const form = event.target;
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read');

    // addBookToLibrary(title, author, pages, read);
    createCard(title, author, pages, read,  addBookToLibrary(title, author, pages, read));
    dialog.close();
    form.reset();
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    processForm(event);
});

closeButton.addEventListener('click', () => {
    dialog.close();
});