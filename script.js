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
     let book = new Book(form["bname"].value, form["aname"].value, form["pages"].value, form["checkbox"].value)
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

function formValid() {
    let name = form["bname"].value
    let author = form["aname"].value
    if(name === "" || author === "") {
        alert('Form must be filled')
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
      }
      else {
        alert('Please Fill out the form')
      }
      formContainer.setAttributeNode(hide)
      displayBooks()
})