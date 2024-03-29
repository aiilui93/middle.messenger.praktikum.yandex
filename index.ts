import loginForm from './src/pages/login';
import signupForm from './src/pages/signup';
import settingsPage from './src/pages/settings';
import chatPage from './src/pages/chat';
import page404 from './src/pages/404';
import page500 from './src/pages/500';
import Router from './src/utils/Router/Router';
import { Routes } from './src/utils/types/dataTypes';
import AuthController from './src/controllers/AuthController';

document.addEventListener('DOMContentLoaded', async () => {
    Router
        .use(Routes.Index, loginForm)
        .use(Routes.Login, loginForm)
        .use(Routes.Signup, signupForm)
        .use(Routes.Settings, settingsPage)
        .use(Routes.Chat, chatPage)
        .use(Routes.Error404, page404)
        .use(Routes.Error500, page500);

    let isProtectedRoute: boolean = true;

    switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Login:
    case Routes.Signup:
    case Routes.Error404:
    case Routes.Error500:
        isProtectedRoute = false;
        break;
    default:
        isProtectedRoute = true;
        break;
    }

    try {
        await AuthController.fetchUser();

        Router.start();

        if (!isProtectedRoute) {
            Router.go(Routes.Settings);
        }
    } catch (e) {
        Router.start();

        if (isProtectedRoute) {
            Router.go(Routes.Index);
        }
    }
});
