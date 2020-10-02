import { LightningElement} from 'lwc';
    export default class HelloWorld extends LightningElement {
        greeting = 'XYZ';
        changeHandler(event) {
            this.greeting = event.target.value;
        }
    }