// Import main CSS and JS files
import { mainStyle, mainScript } from '../../js/main.js';

// Load data when document is ready
document.addEventListener('DOMContentLoaded', loadData);

function loadData() {
  fetch('../../data/about.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('aboutContent').innerHTML = data.content;
    })
    .catch(error => console.error('Error:', error));
}