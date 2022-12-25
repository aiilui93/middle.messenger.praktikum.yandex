import { ObjectLiteral } from '../types/dataTypes';

export default function renderPage(page: ObjectLiteral | null, selector?: string): void {
    const target = selector ? document.querySelector(selector) : document.querySelector('#app');

    if (target) {
        target.append(page!.getContent());
    }
}
