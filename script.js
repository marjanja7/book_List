const containerForm = document.getElementById ('container-form')
const openFormButton = document.getElementById ('button-add-book')
const closeFormButton = document.getElementById ('button-close')

function openContainerForm () {
  containerForm.style.display = 'flex'
}
function closeContainerForm () {
  containerForm.style.display = 'none'
}
 openFormButton.addEventListener('click', openContainerForm )
 closeFormButton.addEventListener('click', closeContainerForm)

const books = [
    {
      id: 1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: './book1.jpg'
    },
    {
      id: 2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: './book2.jpg'
    },
    {
      id: 3,
      title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: './book3.jpg'
    },
    {
      id: 4,
      title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image: './book4.jpg'
    }
  ] 

  const containersBooks = document.getElementById("book-list")

  function renderBooks(){
    containersBooks.innerHTML =""
      books.forEach((book)=> {
        containersBooks.innerHTML += `
            <div class="containerBook">
              <p > <img class="image" src="${book.image}"/></p>
              <h3>${book.title}</h3>
              <p class="year">${book.year}</p>
              <p class="authors">${book.authors}</p>
              <div class="buttons">
                <button class="button-chanch" ">Изменить</button>
                <button class="button-delete" onclick="deleteBook(${book.id})">Удалить</button>
              </div>
            </div>
            `
      })
  }
const buttonAddBook = document.getElementById('button-add-book')

buttonAddBook.addEventListener('click', openContainerForm)

function saveToLocalStorage () {
    const booksJson = JSON.stringify(books)
    localStorage.setItem('books', booksJson)
}

function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('authors').value = ""
    document.getElementById('year').value = ""
    document.getElementById('image').value = ""
}
function deleteBook(id) {
    const book = books.find((b) => {
        return b.id === id
  })
    const bookIndex = books.indexOf(book)
    books.splice(bookIndex, 1)
    renderBooks ()

    const booksJson = JSON.stringify(books)
    localStorage.setItem('books', booksJson)
}
const buttonSaveBook = document.getElementById('button-save')

function saveBook() {
    const titleValue = document.getElementById('title').value
    const authorsValue = document.getElementById('authors').value
    const yearValue = document.getElementById('year').value
    const imageValue = document.getElementById('image').value

    
    const book = {
        title: titleValue,
        authors: authorsValue,
        year: yearValue,
        image: imageValue
    }
    books.push(book)
    
    renderBooks ()
    clearForm ()
    closeContainerForm ()

    const booksJson = JSON.stringify(books)
    localStorage.setItem('books', booksJson)
} 

buttonSaveBook.addEventListener('click', saveBook )

const booksJson = localStorage.getItem('books')
if (booksJson) {
  books = JSON.parse(booksJson)
}

renderBooks()

