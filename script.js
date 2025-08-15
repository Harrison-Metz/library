const myLibrary = [];

const book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let new_book = new book(title, author, pages, read);
    myLibrary.push(new_book);
    return myLibrary;
}
