import { LightningElement} from 'lwc';
    export default class HelloWorld extends LightningElement {
        greeting = 'XY';
        changeHandler(event) {
            this.greeting = event.target.value;
        }
    }