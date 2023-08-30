// Import main styles and scripts
import { mainStyle, mainScript } from '../../js/main.js';

// Define Author schema
class Author {
  constructor(name, bio, books) {
    this.name = name;
    this.bio = bio;
    this.books = books;
  }
}

// Define function to load data
function loadData() {
  // Fetch data from API or local JSON file
  fetch('authors.json')
    .then(response => response.json())
    .then(data => {
      // Emit authorDataLoaded event
      const event = new CustomEvent('authorDataLoaded', { detail: data });
      document.dispatchEvent(event);
    })
    .catch(error => console.error('Error:', error));
}

// Define function to render list
function renderList() {
  // Get author list element
  const authorList = document.getElementById('authorList');

  // Listen for authorDataLoaded event
  document.addEventListener('authorDataLoaded', function (event) {
    // Get data from event
    const authors = event.detail;

    // Render each author
    authors.forEach(author => {
      // Create new Author object
      const authorObj = new Author(author.name, author.bio, author.books);

      // Create list item
      const listItem = document.createElement('li');

      // Set list item content
      listItem.textContent = `${authorObj.name}: ${authorObj.bio}`;

      // Append list item to author list
      authorList.appendChild(listItem);
    });
  });
}

// Call functions
loadData();
renderList();