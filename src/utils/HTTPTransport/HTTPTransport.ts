enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type Options = {
    method?: Method;
    timeout?: number;
    headers?: Record<string, string>;
    data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

type HTTPMethod = <Res>(url: string, options?: OptionsWithoutMethod) => Promise<Res>

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get:HTTPMethod = (url = '/', options = {}) => this.request(this.endpoint + url, { ...options, method: Method.GET }, options.timeout);

    public post:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: Method.POST }, options.timeout);

    public put:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: Method.PUT }, options.timeout);

    public patch:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: Method.PATCH }, options.timeout);

    public delete:HTTPMethod = (url, options = {}) => this.request(this.endpoint + url, { ...options, method: Method.DELETE }, options.timeout);

    private request = <Res>(url: string, options: Options = {}, timeout = 5000): Promise<Res> => {
        const { method, data, headers = {} } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            // если отправляем картинку, то там не нужен такой заголовок
            if (!(data instanceof FormData)) {
                xhr.setRequestHeader('Content-Type', 'application/json');
            }

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
                    resolve(response);
                } else {
                    reject(response);
                }
            };

            if (method === Method.GET || !data) {
                xhr.send();
            } else {
                xhr.send((data instanceof FormData) ? data : JSON.stringify(data));
            }
        });
    };
}
