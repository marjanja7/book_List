const books = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: './book1.jpg'
    },
    {
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: './book2.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: './book3.jpg'
    },
    {
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image: './book4.jpg'
    }
    ]
    const containersBooks = document.getElementById("bookList")
    books.forEach((book)=> {
        containersBooks.innerHTML += `
            <div class="containerBook">
              <p > <img class="image" src="${book.image}"/></p>
              <h2>${book.title}</h2>
              <p class="year">${book.year}</p>
              <p class="authors">${book.authors}</p>
              <div class="buttons">
                <button class="button-chanch">Изменить</button>
                <button class="button-delete">Удалить</button>
              </div>
            </div>
            `
            })