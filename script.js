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
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)    
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info())
    let book = document.createElement('div')
    book.innerText = myLibrary[i].info()
    document.getElementById('books-list').append(book)
    }
}




addBookToLibrary('The Hobbit', 'Green', 223, false)
addBookToLibrary('Atomic habbits', 'john cena', 269, true)

displayBooks()



