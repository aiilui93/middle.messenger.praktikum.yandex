import renderPage from './src/utils/render/renderPage';
import loginForm from './src/pages/login';
import signupForm from './src/pages/signup';
import settingsPage from './src/pages/settings';
import chatPage from './src/pages/chat';
import page404 from './src/pages/404';
import page500 from './src/pages/500';

/* Временная реализация с импортами всех страниц, есть дубль основного файла CSS из-за такого подключения,
** в дальнейшем с появлением роутера планируется переделать и дубли уйдут */

document.addEventListener('DOMContentLoaded', () => {
    const { pathname } = document.location; // текущий url

    switch (pathname) {
    case '/':
        renderPage(loginForm);
        break;

    case '/login':
        renderPage(loginForm);
        break;

    case '/signup':
        renderPage(signupForm);
        break;

    case '/settings':
        renderPage(settingsPage);
        break;

    case '/chat':
        renderPage(chatPage);
        break;

    case '/500':
        renderPage(page500);
        break;

    case '/404':
        renderPage(page404);
        break;

    default:
        renderPage(page404);
        break;
    }
});
