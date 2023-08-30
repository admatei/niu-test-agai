// Importing main CSS and JS files
import { mainStyle, mainScript } from '../../js/main.js';

// Importing Book schema
import { Book } from '../../schemas/book.js';

// DOM element ID
const bookList = document.getElementById('bookList');

// Message name
const bookDataLoaded = new Event('bookDataLoaded');

// Function to load book data
function loadData() {
  fetch('../../data/books.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(book => {
        const newBook = new Book(book);
        renderList(newBook);
      });
      document.dispatchEvent(bookDataLoaded);
    });
}

// Function to render book list
function renderList(book) {
  const listItem = document.createElement('li');
  listItem.textContent = `${book.title} by ${book.author}`;
  bookList.appendChild(listItem);
}

// Load data when the page loads
window.onload = loadData;