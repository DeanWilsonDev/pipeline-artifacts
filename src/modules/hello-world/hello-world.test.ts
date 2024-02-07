import { helloWorld } from './hello-world';

describe(`hello-world`, () => {
    it(`returns hello world`, () => {
        expect(helloWorld()).toBe('Hello World!');
    });

});
