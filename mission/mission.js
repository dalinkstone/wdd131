const themeSelector = document.querySelector("select");

function changeTheme() {

    if (themeSelector.value == 'dark') {
        document.querySelector('body').setAttribute('class', 'dark');
        document.querySelector('img').setAttribute('src', 'byui-logo_white.png');
    } else {
        document.querySelector('body').removeAttribute('class');
        document.querySelector('img').setAttribute('src', 'byui-logo.jpg');
    }
}

themeSelector.addEventListener('change', changeTheme);