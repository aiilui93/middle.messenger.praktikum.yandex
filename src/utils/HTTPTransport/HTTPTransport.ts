import queryStringify from '../helpers/queryStringify';

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

type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<unknown>

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get:HTTPMethod = (url, options = {}) => {
        const query: string = queryStringify(options.data);
        const urlWithQuery: string = `${url}${query}`;

        return this.request(this.endpoint + urlWithQuery, { ...options, method: METHOD.GET }, options.timeout);
    };

    public post:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: METHOD.POST }, options.timeout);

    public put:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: METHOD.PUT }, options.timeout);

    public patch:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: METHOD.PATCH }, options.timeout);

    public delete:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: METHOD.DELETE }, options.timeout);

    private request = (url: string, options: Options = {}, timeout = 5000) => {
        const { method, data, headers = {} } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.setRequestHeader('Content-Type', 'application/json');
            // но если отправляем картинку, то там не нужен такой заголовок
            // если data instanceof FormData

            if (headers) {
                Object.entries(headers).forEach(([header, value]) => {
                    xhr.setRequestHeader(header, value);
                });
            }

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            xhr.onload = () => {
                const { status, response } = xhr;

                if (status >= 200 && status <= 300) {
                    resolve(xhr);
                } else {
                    reject(response);
                }
            };

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
