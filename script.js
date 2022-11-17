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
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info())
    }
}

function validateForm(event){
    event.preventDefault();
}

function formValid(form) {
    return true
}



const addBookButton = document.getElementById('add-book')
const formContainer = document.getElementById('form-container')
const closeFormButton = document.getElementById('close-form')
const hide = document.createAttribute('hidden')
const form = document.getElementById('form')
const submitForm = document.getElementById('submit')






addBookButton.addEventListener('click', () => {
    formContainer.removeAttribute('hidden')
})


closeFormButton.addEventListener('click', () => {
    console.log('here')
    formContainer.setAttributeNode(hide)
})

submitForm.addEventListener('click', () => {
    formContainer.setAttributeNode(hide)
    const formData = new FormData(form)
    console.log(typeof(formData))
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`)
      }

      if(formValid(form)) {
        addBookToLibrary(formData.get(bname), formData.get(aname), formData.get(pages), true)
      }
      displayBooks()
})