import queryStringify from './queryStringify';

enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type Options = {
    method?: METHOD;
    timeout?: number;
    headers?: Record<string, string>;
    data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

class HTTPTransport {
    get = (url: string, options: OptionsWithoutMethod = {}) => {
        const query: string = queryStringify(options.data);
        const urlWithQuery: string = `${url}${query}`;

        return this.request(urlWithQuery, { ...options, method: METHOD.GET }, options.timeout);
    };

    post = (url: string, options: OptionsWithoutMethod = {}) => this.request(url, { ...options, method: METHOD.POST }, options.timeout);

    put = (url: string, options: OptionsWithoutMethod = {}) => this.request(url, { ...options, method: METHOD.PUT }, options.timeout);

    delete = (url: string, options: OptionsWithoutMethod = {}) => this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);

    request = (url: string, options: Options = {}, timeout = 5000) => {
        const { method, data, headers = {} } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            if (headers) {
                Object.entries(headers).forEach(([header, value]) => {
                    xhr.setRequestHeader(header, value);
                });
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
