import Content from "../../components/content";
import renderPage from "../../utils/render/renderPage";
import '../../styles/error.scss';

const page500 = new Content({
    title: '500',
    description: 'Мы уже фиксим'
})

window.addEventListener('DOMContentLoaded', () => {
    renderPage(page500);
});

