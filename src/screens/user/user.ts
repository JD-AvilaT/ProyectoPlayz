import "../../components/export"
import styles from "./user.css"
import { appState, dispatch } from "../../store/index";
import {Edit, LogOut, Navigate} from "../../store/actions"
import { Screens } from "../../types/store";

const credentials = { 
    id: appState.user.id,
    userName: "",
    email: "",
    password: "",
    img: "",
}

export default class AppUser extends HTMLElement {
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

            const downContainer = this.ownerDocument.createElement("section");
            downContainer.className = "downContainer"
            container.appendChild(downContainer);

            const navbar = this.ownerDocument.createElement("my-navbar");
            container.appendChild(navbar);

            const imgSection = this.ownerDocument.createElement("section");
            imgSection.className = "imgSection";
            downContainer.appendChild(imgSection);

            const profilePicture = this.ownerDocument.createElement("img");
            profilePicture.className = "profilePicture";
            profilePicture.src = appState.user.img;
            imgSection.appendChild(profilePicture);

            const infoSection = this.ownerDocument.createElement("section");
            infoSection.className = "infoSection";
            downContainer.appendChild(infoSection);

            const name = this.ownerDocument.createElement("h1");
            name.className = "name";
            name.textContent = appState.user.userName;
            imgSection.appendChild(name);

            downContainer.appendChild(imgSection);
            downContainer.appendChild(name);
            this.shadowRoot?.appendChild(container);
        }
    }
}

customElements.define('app-user', AppUser)
