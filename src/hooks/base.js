import EventEmitter from 'eventemitter2';

export default class extends EventEmitter.EventEmitter2 {
    constructor() {
        super();
        this.body = document.body;
    }
}
