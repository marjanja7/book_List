const books = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: './81gtKoapHFL.jpg'
    },
    {
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: './81kqrwS1nNL.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image: './51+Siphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image: './51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]
    const containersBooks = document.getElementById("bookList")
    books.forEach((book)=> {
        containersBooks.innerHTML += `
            <div class="containerBook">
            <h2>${book.title}</h2>
            <p class="year">${book.year}</p>
            <p class="authors">${book.authors}</p>
            <p>${book.image}</p>
            </div>
            `
            })