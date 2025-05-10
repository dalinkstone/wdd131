const menuSelector = document.querySelector("button");

function displayMenu() {

    document.querySelector('.dropdown').setAttribute('display', 'block');
    
}

menuSelector.addEventListener('mouseover', displayMenu);