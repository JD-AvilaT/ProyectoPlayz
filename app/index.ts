import "./components/index.js"
import Publicationsdata from "./publicationdata.js";

import MyPublications, { Attributes } from "./components/publicationcard/publicationcard.js";

class AppContainer extends HTMLElement {
    publications: MyPublications[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        Publicationsdata.forEach((user) => {
            const publicationCard = this.ownerDocument.createElement(
                "my-publication"
                ) as MyPublications;
                publicationCard.setAttribute(Attributes.imgprofile, user.imgprofile);
                publicationCard.setAttribute(Attributes.name, user.name);
                publicationCard.setAttribute(Attributes.username, user.username);
                publicationCard.setAttribute(Attributes.description, user.description);
                publicationCard.setAttribute(Attributes.video, user.video);
                this.publications.push(publicationCard);
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                `;
                
                const publicationsSection = this.ownerDocument.createElement("section")
                publicationsSection.className = 'publicationS'
                this.publications.forEach((user) => {
                    publicationsSection.appendChild(user);
                });
                this.shadowRoot?.appendChild(publicationsSection);

            }
        }
    }
    
customElements.define("app-container", AppContainer);