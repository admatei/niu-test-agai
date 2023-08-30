// Importing dependencies
import { mainStyle } from '../css/style.css';
import { mainScript } from './carousel.js';

// Data schemas
let Book = {};
let Author = {};
let Imprint = {};

// DOM Elements
const carousel = document.getElementById('carousel');
const bookList = document.getElementById('bookList');
const authorList = document.getElementById('authorList');
const imprintList = document.getElementById('imprintList');
const aboutContent = document.getElementById('aboutContent');
const contactForm = document.getElementById('contactForm');

// Message names
const bookDataLoaded = new Event('bookDataLoaded');
const authorDataLoaded = new Event('authorDataLoaded');
const imprintDataLoaded = new Event('imprintDataLoaded');

// Function to load data
function loadData() {
  // Load book data
  fetch('website/books/data.json')
    .then(response => response.json())
    .then(data => {
      Book = data;
      document.dispatchEvent(bookDataLoaded);
    });

  // Load author data
  fetch('website/authors/data.json')
    .then(response => response.json())
    .then(data => {
      Author = data;
      document.dispatchEvent(authorDataLoaded);
    });

  // Load imprint data
  fetch('website/imprints/data.json')
    .then(response => response.json())
    .then(data => {
      Imprint = data;
      document.dispatchEvent(imprintDataLoaded);
    });
}

// Function to initialize carousel
function initCarousel() {
  // Code to initialize carousel goes here
}

// Function to render list
function renderList() {
  // Code to render list goes here
}

// Function to submit contact form
function submitContactForm() {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to submit form goes here
  });
}

// Call functions
loadData();
initCarousel();
renderList();
submitContactForm();