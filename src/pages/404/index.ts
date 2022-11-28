import Content from "../../components/content";
import renderPage from "../../utils/render/renderPage";
import '../../styles/error.scss';

const page404 = new Content({
    title: '404',
    description: 'Не туда попали'
})

window.addEventListener('DOMContentLoaded', () => {
    renderPage(page404);
});

