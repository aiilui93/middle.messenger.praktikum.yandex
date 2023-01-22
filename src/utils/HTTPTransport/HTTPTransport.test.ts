import { expect } from 'chai';
import {
    afterEach, beforeEach, describe, it
} from 'mocha';
import Sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './HTTPTransport';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = Sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    });

    it('.get() should send GET request', () => {
        instance.get('/user');

        const [request] = requests;

        expect(request.method).to.eq('GET');
    });

    it('.post() should send GET request', () => {
        instance.post('/signup');

        const [request] = requests;

        expect(request.method).to.eq('POST');
    });

    it('.put() should send PUT request', () => {
        instance.put('/password');

        const [request] = requests;

        expect(request.method).to.eq('PUT');
    });

    it('.delete() should send DELETE request', () => {
        instance.delete('/chats/user');

        const [request] = requests;

        expect(request.method).to.eq('DELETE');
    });
});
