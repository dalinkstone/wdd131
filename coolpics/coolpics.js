const menuButton = document.querySelector(".menu");
function displayMenu() {
    const dropdown = document.querySelector(".dropdown")
    dropdown.classList.toggle("hide")    
}
menuButton.addEventListener('click', displayMenu);

const dialog = document.createElement('dialog');
const gallery = document.querySelector('.gallery');
document.querySelector('main').prepend(dialog);

function displayModal(event) {
    const clicked = event.target.closest('img');
    const src = clicked.src;
    const alt = clicked.alt;

    const finalSrc = src.split('-')[0] + '-full.jpeg';

    dialog.innerHTML = `<img src="${finalSrc}" alt="${alt}"><button class="close-viewer">X</button>`;

    dialog.showModal();
}

function closeButton() {
    dialog.close();
}

gallery.addEventListener('click', displayModal);

dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
})

dialog.addEventListener('click', (event) => {
    const close = event.target.closest('.close-viewer');
    if (close) {
        dialog.close();
    }
})