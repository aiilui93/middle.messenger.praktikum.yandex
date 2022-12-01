export default function queryStringify(data: {}) {
    if (!data || typeof data !== 'object') {
        throw new Error('Тут должен быть объект');
    }

    const queryStr = Object.entries(data).reduce((query, [key, value]) => `${query}${key}=${value}&`, '?');

    return queryStr.slice(0, -1);
}
