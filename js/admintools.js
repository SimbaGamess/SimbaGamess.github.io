//
// document.querySelectorAll('a').forEach(link => {
//     if (link.href.startsWith('http')) {
//         link.setAttribute('target', '_blank');
//         link.setAttribute('rel', 'noopener noreferrer');
//     }
// });
const images = [
    "../images/datapacks/admincommands.png",
    "../images/datapacks/adminshow.gif"
];

const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dotsContainer');
let currentSlide = 0;
let minWidth = Infinity;
let minHeight = Infinity;

// Dynamisch Bilder und Punkte hinzufügen
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('pictures');
    img.onload = () => {
        // Bestimme die kleinste Breite und Höhe
        if (img.naturalWidth < minWidth) minWidth = img.naturalWidth;
        if (img.naturalHeight < minHeight) minHeight = img.naturalHeight;
        // Setze die Größe der Bildanzeige nach dem Laden der Bilder
        if (index === images.length - 1) {
            carousel.style.width = `${minWidth}px`;
            carousel.style.height = `${minHeight}px`;
        }
    };
    if (index === 0) img.classList.add('active');
    carousel.insertBefore(img, carousel.querySelector('.arrow.right'));

    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('onclick', `setCurrentSlide(${index})`);
    dotsContainer.appendChild(dot);
});

const slides = document.querySelectorAll('.pictures');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

function setCurrentSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}