//заглушка - при отправке формы переходим на страницу чата
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location = '/chat/index.html';
    });
}
