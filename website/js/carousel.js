function initCarousel() {
    const carousel = document.getElementById('carousel');
    let index = 0;

    const books = loadData('Book');
    books.then(data => {
        if (data.length > 0) {
            carousel.innerHTML = renderCarouselItem(data[0]);
        }

        setInterval(() => {
            index = (index + 1) % data.length;
            carousel.innerHTML = renderCarouselItem(data[index]);
        }, 3000);
    });
}

function renderCarouselItem(book) {
    return `
        <div class="carousel-item">
            <img src="${book.image}" alt="${book.title}">
            <div class="carousel-caption">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initCarousel);