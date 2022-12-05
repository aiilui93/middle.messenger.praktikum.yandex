import { ObjectLiteral } from '../types/dataTypes';

export default function renderPage(page: ObjectLiteral): void {
    const target = document.querySelector('#app');

    if (target) {
        target.append(page.getContent());
    }
}
