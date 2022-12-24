import BaseAPI from './BaseAPI';

export default class ResoucesAPI extends BaseAPI {
    constructor() {
        super('/resources');
    }

    public send(data: FormData) {
        return this.http.put('/', { data })
            .then(() => true)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    public read(path: string) {
        return this.http.get(`/${path}`)
            .then((response) => response)
            .catch((e) => {
                throw new Error(e.reason);
            });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}
