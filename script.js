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

function addBookToLibrary() {
    let book = new Book('The hobbit', 'zack snider', 222, true)
    myLibrary.push(book)
    let book2 = new Book('Harry Potter', 'Harley Quinn', 5000, false)
    myLibrary.push(book2)
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info())
    }
}

function submit_form() {
    let bookname = document.getElementById('bname').innerText
    let book = new Book(bookname, 'someone', 55, false)
    myLibrary.push(book)
    alert('Form Submitted Successfully')
    displayBooks()
}





const hide = document.createAttribute('hidden')
const closeBookAdder = document.getElementById('form-close')
closeBookAdder.addEventListener('click', () => {
    console.log('clicked')
    document.getElementById('form-field').setAttributeNode(hide)
})


const addBook = document.getElementById('add-book')
addBook.addEventListener('click', () => {
    document.getElementById('form-field').removeAttribute('hidden')
})



