import "../components/export"
import { attribute } from "../components/infoinputs/infoinputs";

import styles from "./register.css"
import { dispatch } from "../store/index";
import {Register, navigate} from "../store/actions"
import { Screens } from "../types/store";

const credentials = { 
    username: "",
    email: "",
    password: ""
}

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

            const userName = this.ownerDocument.createElement('my-input');
            userName.setAttribute(attribute.text, "Username");
            userName.setAttribute(attribute.type, "text");
            userName.addEventListener("change", (e:any)=>credentials.username = e.target.value);
            form.appendChild(userName);

            const email = this.ownerDocument.createElement('my-input');
            email.setAttribute(attribute.text, "Email");
            email.setAttribute(attribute.type, "email");
            userName.addEventListener("change", (e:any)=>credentials.email = e.target.value);
            form.appendChild(email);

            const password = this.ownerDocument.createElement('my-input');
            password.setAttribute(attribute.text, "Password");
            password.setAttribute(attribute.type, "password");
            userName.addEventListener("change", (e:any)=>credentials.password = e.target.value);
            console.log(credentials)
            form.appendChild(password);
            
            const button = this.ownerDocument.createElement('my-button');
             button.addEventListener("click", ()=>{
                dispatch(navigate(Screens.DASHBOARD))
             })

             button.addEventListener('click', ()=>{
                dispatch(
                    Register({
                        payload:{
                            userName: credentials.username,
                            email: credentials.email,
                            password: credentials.password
                        }
                    })
                )
            })

            const account = this.ownerDocument.createElement('button');
            account.innerText = 'Already have an account?';

            form.appendChild(button);
            form.appendChild(account);
            container.appendChild(form)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('app-register', AppRegister)
