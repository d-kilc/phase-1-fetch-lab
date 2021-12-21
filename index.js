function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function bookNumber(n) {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(`${n}th Book: ${json[n-1].name}`));  
}

function characterNumber(n) {
  fetch("https://anapioficeandfire.com/api/characters")
  .then((resp) => resp.json())
  .then((json) => console.log(`${n}th Character: ${json[n-1].name}`));  
}

function countPages() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log('Number of pages: ', json.reduce((acc, item) =>  {
      return acc + item.numberOfPages
    }, 0) )
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

bookNumber(5)
characterNumber(3)
countPages()

fetchBooks()
