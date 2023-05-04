import "../components/export"
import { attribute } from "../components/infoinputs/infoinputs";

import styles from "./register.css"
import { dispatch } from "../store/index";
import {Register} from "../store/actions"

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

            const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);

            const form = this.ownerDocument.createElement('section')

            const userName = this.ownerDocument.createElement('my-input')
            userName.setAttribute(attribute.text, "Username")
            userName.setAttribute(attribute.type, "text")
            
            form.appendChild(userName)

            const email = this.ownerDocument.createElement('my-input')
            email.setAttribute(attribute.text, "Email")
            email.setAttribute(attribute.type, "email")
            form.appendChild(email)

            const password = this.ownerDocument.createElement('my-input')
            password.setAttribute(attribute.text, "Password")
            password.setAttribute(attribute.type, "password")
            form.appendChild(password)
            
            const button = this.ownerDocument.createElement('my-button');
            // button.addEventListener('click', ()=>{
            //     dispatch(
            //         Register({
            //             payload:{
            //                 userName: ,
            //                 email:,
            //                 password:
            //             }
            //         })
            //     )
            // })

            const account = this.ownerDocument.createElement('h3')
            account.innerText = 'Already have an account?'

            form.appendChild(button)
            form.appendChild(account)
            this.shadowRoot?.appendChild(form)


        }
    }
}

customElements.define('app-register', AppRegister)
