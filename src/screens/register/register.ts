import "../../components/export"

import styles from "./register.css"
import { dispatch } from "../../store/index";
import {Navigate} from "../../store/actions"
import { Screens } from "../../types/store";


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

            const css = this.ownerDocument.createElement('style');
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            const container = this.ownerDocument.createElement("section")
            container.className = "container"

            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const campsForm = this.ownerDocument.createElement("form-register")

            const account = this.ownerDocument.createElement('button');
            account.innerText = 'Already have an account?';
            account.addEventListener("click", ()=>{
                dispatch(Navigate(Screens.LOGIN))
            })

            form.appendChild(campsForm)
            form.appendChild(account);
            container.appendChild(form)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('app-register', AppRegister)
