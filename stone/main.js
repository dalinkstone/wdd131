document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-btn');
    const navigation = document.getElementById('main-nav');

    hamburgerButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburgerButton.classList.toggle('open');
    });
});