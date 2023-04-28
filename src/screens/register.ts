import "../components/export"
import Placeholdersdata from "../mocks/placeholders";
import {attribute} from "../components/infoinputs/infoinputs"

import styles from "./register.css"

class AppRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);

            const form = this.ownerDocument.createElement('section')

            Placeholdersdata.forEach((text)=>{
                const input = this.ownerDocument.createElement('my-input')
                input.setAttribute(attribute.input_text, text.text)
                form.appendChild(input)
            });

            const button = this.ownerDocument.createElement('my-button');
            
            const account = this.ownerDocument.createElement('h3')
            account.innerText = 'Already have an account?'

            form.appendChild(button)
            form.appendChild(account)
            this.shadowRoot?.appendChild(form)


        }
    }
}

customElements.define('app-register', AppRegister)
