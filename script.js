let myLibrary = []


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'} `
    }
}

function addBookToLibrary(title, author, pages, read) {
     let newBook = new Book(title, author, pages, read)
     myLibrary.push(newBook)
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div')
        book.setAttribute('class', 'books')
        bookGrid.append(book)
    }
}

let bookGrid = document.getElementById('main-body')

addBookToLibrary('The New', 'Jamshed', 99, false)
addBookToLibrary('The New', 'Jamshed', 199, true)
displayBooks()
