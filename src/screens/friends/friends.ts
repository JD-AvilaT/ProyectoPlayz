import "../../components/export"
import Friends, { Attribute2 } from "../../components/friends/friends";

import styles from "./favorites.css"


export default class AppFriends extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

                const main = this.ownerDocument.createElement("section");
                main.className = 'main';

                const navbar = this.ownerDocument.createElement("my-navbar")

                main.appendChild(navbar)

                const friendsSection = this.ownerDocument.createElement("section")
                friendsSection.className = 'friendsSection';

                const friendCard = this.ownerDocument.createElement("my-friends")
                
                
                
                friendsSection.appendChild(friendCard)
                main.appendChild(friendsSection)

                this.shadowRoot?.appendChild(main)

            }
        }
    }
    
customElements.define("my-friends", Friends);