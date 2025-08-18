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

function createCard(title, author, pages, read){
    const card = document.createElement("div");
    card.className = 'card';
    const titleP = document.createElement('p');
    titleP.innerHTML = `TITLE: ${title}`;
    const authorP = document.createElement('p');
    authorP.innerHTML = `AUTHOR: ${author}`;
    const pagesP = document.createElement('p');
    pagesP.innerHTML = `PAGES: ${pages}`;
    const readP = document.createElement('p');
    readP.innerHTML = `READ: ${read}`;
    card.append(titleP, authorP, pagesP, readP);
    container.appendChild(card);
}

function displayBooks(array){
    for(let i = 0; i < array.length; i++){
        createCard(array[i].title, array[i].author, array[i].pages, array[i].read);
    }
}

const addButton = document.querySelector('.add-button');
const dialog = document.querySelector('.popup-form');
const form = document.querySelector('#book-form');

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

    addBookToLibrary(title, author, pages, read);
    createCard(title, author, pages, read);
    dialog.close();
    form.reset();
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)
    processForm(event); // Call your custom function
});

const print = document.querySelector('header button');
print.addEventListener('click', () => {
    console.log(myLibrary);
})
