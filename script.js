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


const grid = document.getElementById('main-body')

let buttonCount = 0


function displayBooks() {
    
    grid.innerText =''
    buttonCount = 0
    
    
    for (let i = 0; i < myLibrary.length; i++) {
        let tempElement = document.createElement('div')
        tempElement.setAttribute('class', 'book')
        let bookHeading = document.createElement('h2')
        let authorName = document.createElement('p')
        let pages = document.createElement('p')
        let read = document.createElement('p')
        let removeBook = document.createElement('button')
        removeBook.setAttribute('class', 'remove-button')
        bookHeading.innerText = myLibrary[i].title
        authorName.innerText = myLibrary[i].author
        pages.innerText = myLibrary[i].pages
        read.innerText = myLibrary[i].read ? "Read":"Not Read Yet"
        removeBook.innerText = "Remove"
        removeBook.setAttribute('id', buttonCount.toString())
        tempElement.appendChild(bookHeading)
        tempElement.appendChild(authorName)
        tempElement.appendChild(pages)
        tempElement.appendChild(read)
        tempElement.appendChild(removeBook)
        grid.appendChild(tempElement)
        buttonCount += 1
        console.log(myLibrary[i].info())
    }
    addEventListenerByClass('remove-button', 'click')
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

function addEventListenerByClass(className, event) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, e => {
            console.log((e.path[0]).id)
            myLibrary.splice((e.path[0]).id, 1)
         //   console.log(myLibrary)
         //   grid.textContent = ''
          //  buttonCount = 0
          //  if(myLibrary.length > 0) {
             displayBooks()                               //Change the display book function, currently it
                                                            // prints the last book of lib, we need it to print all the books in the lib
          //  }
        });
    }
}


const addBookButton = document.getElementById('add-book')
const formContainer = document.getElementById('form-container')
const closeFormButton = document.getElementById('close-form')
const hide = document.createAttribute('hidden')
const form = document.forms["form"]
const submitForm = document.getElementById('submit')
const remove = document.querySelectorAll('.remove-button')




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
        displayBooks()
      }
})

