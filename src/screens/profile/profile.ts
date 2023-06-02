import "../../components/export"
import { attribute } from "../../components/infoinputs/infoinputs";
import styles from "./profile.css"
import { dispatch } from "../../store/index";
import {logOut, navigate} from "../../store/actions"
import { Screens } from "../../types/store";

const credentials = { 
    username: "",
    email: "",
    password: ""
}

class AppProfile extends HTMLElement {
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

            const container = this.ownerDocument.createElement("section");
            container.className = "container"

            const navbar = this.ownerDocument.createElement("my-navbar");
            container.appendChild(navbar);

            const editProfile = this.ownerDocument.createElement("section");
            editProfile.className = "editProfile";
            container.appendChild(editProfile);

            const profilePicture = this.ownerDocument.createElement("img");
            profilePicture.className = "profilePicture";
            profilePicture.src = "../src/imgs/avila.jpg";
            editProfile.appendChild(profilePicture);


            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const userName = this.ownerDocument.createElement('my-input');
            userName.setAttribute(attribute.text, "Change username");
            userName.setAttribute(attribute.type, "text");
            userName.addEventListener("change", (e:any)=>credentials.username = e.target.value);
            form.appendChild(userName);

            const email = this.ownerDocument.createElement('my-input');
            email.setAttribute(attribute.text, "Change email");
            email.setAttribute(attribute.type, "email");
            userName.addEventListener("change", (e:any)=>credentials.email = e.target.value);
            form.appendChild(email);

            const password = this.ownerDocument.createElement('my-input');
            password.setAttribute(attribute.text, "Change password");
            password.setAttribute(attribute.type, "password");
            userName.addEventListener("change", (e:any)=>credentials.password = e.target.value);
            console.log(credentials)
            form.appendChild(password);

            const confirm = this.ownerDocument.createElement('button');
            confirm.textContent = "Confirm";
            confirm.className = "confirm";
            form.appendChild(confirm);
            
            const button = this.ownerDocument.createElement('button');
             button.addEventListener("click", ()=>{
                dispatch(navigate(Screens.REGISTER))
             })

             button.addEventListener('click', ()=>{
                dispatch(
                    logOut()
                )
            })
            button.innerText = 'Log Out';
            button.className = "logOut"

            editProfile.appendChild(form);
            container.appendChild(button);
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('app-profile', AppProfile)
