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

function addBookToLibrary(form) {
    let checkbox = document.getElementById('checkbox')
    let book
    if (checkbox.checked == true) {
        book = new Book(form["bname"].value, form["aname"].value, form["pages"].value, true)
    }
    else {
        book = new Book(form["bname"].value, form["aname"].value, form["pages"].value, false)
    }
     myLibrary.push(book)

}

let lastBook = new Book('placeholder', 'placeholder', 69, false)
function updateLastBookData() {
    lastBook = new Book(myLibrary[myLibrary.length - 1].title, myLibrary[myLibrary.length - 1].author, myLibrary[myLibrary.length - 1].pages, myLibrary[myLibrary.length - 1].read)
}

const grid = document.getElementById('main-body')

let buttonCount = 0


function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info())
    }
    let tempElement = document.createElement('div')
    tempElement.setAttribute('class', 'book')
    let bookHeading = document.createElement('h2')
    let authorName = document.createElement('p')
    let pages = document.createElement('p')
    let read = document.createElement('p')
    let removeBook = document.createElement('button')
    removeBook.innerText = "Remove"
    removeBook.setAttribute('class', 'remove-button')
    removeBook.setAttribute('id', buttonCount.toString())
    buttonCount += 1
    bookHeading.innerText = myLibrary[myLibrary.length - 1].title
    authorName.innerText = myLibrary[myLibrary.length - 1].author
    pages.innerText = myLibrary[myLibrary.length - 1].pages
    read.innerText = myLibrary[myLibrary.length - 1].read ? "Read":"Not Read Yet"
        tempElement.appendChild(bookHeading)
        tempElement.appendChild(authorName)
        tempElement.appendChild(pages)
        tempElement.appendChild(read)
        tempElement.appendChild(removeBook)
        grid.appendChild(tempElement)
}

function removeElement(button) {
    console.log(typeof(button))
}


function stopRequest(event){
    event.preventDefault();
}

function formValid() {
    let name = form["bname"].value
    let author = form["aname"].value
    let pageNumber = form["pages"].value
    if(name === "" || author === "" || isNaN(pageNumber) || pageNumber < 1){
        alert('Oops something is wrong, Please check your data again')
        return false
    }
    return true
}


const addBookButton = document.getElementById('add-book')
const formContainer = document.getElementById('form-container')
const closeFormButton = document.getElementById('close-form')
const hide = document.createAttribute('hidden')
const form = document.forms["form"]
const submitForm = document.getElementById('submit')




addBookButton.addEventListener('click', () => {
    formContainer.removeAttribute('hidden')
})


closeFormButton.addEventListener('click', () => {
    form.reset()
    formContainer.setAttributeNode(hide)
})

submitForm.addEventListener('click', () => {
      if(formValid()) {
        console.log("form validated")
        addBookToLibrary(form)
        form.reset()
        formContainer.setAttributeNode(hide)
      }
      displayBooks()
})
