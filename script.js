const myLibrary = [
    {author : "JK", id : "a376b501-96e2-4195-a661-66026b04e316", pages : 420, read : true, title : "hp"},
    {author : "Tolk", id : "a3adfasfasdf", pages : 69, read : false, title : "lotr"}
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
    return myLibrary;
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


