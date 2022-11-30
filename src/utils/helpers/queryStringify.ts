

export default function queryStringify(data: {}) {

    if (!data || typeof data !== 'object') {
        throw new Error('Тут должен быть объект');
    }
    
    const query = Object.entries(data).reduce((query, [key, value]) => {
      return `${query}${key}=${value}&`;
    }, '?');

    return query.slice(0, -1); 
}