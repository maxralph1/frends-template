let user = document.querySelector('#user-menu-button');
let userMenu = document.querySelector('user-menu');

user.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
});
