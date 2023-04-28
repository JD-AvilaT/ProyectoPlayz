import "../components/export"
import Publicationsdata from "../mocks/publicationdata";

import MyPublications, { Attribute1 } from "../components/publicationcard/publicationcard";

class AppContainer extends HTMLElement {
    publicationsList: MyPublications[] = [];

    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        Publicationsdata.forEach((user) => {
            const publicationCard = this.ownerDocument.createElement(
                "my-publication"
                ) as MyPublications;
                publicationCard.setAttribute(Attribute1.imgprofile, user.imgprofile);
                publicationCard.setAttribute(Attribute1.name, user.name);
                publicationCard.setAttribute(Attribute1.username, user.username);
                publicationCard.setAttribute(Attribute1.description, user.description);
                publicationCard.setAttribute(Attribute1.video, user.video);
                this.publicationsList.push(publicationCard);
            });
        }

        
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="../public/app/index.css">
                `;

                this.shadowRoot.innerHTML += `
                <my-navbar></my-navbar>
                `;

                this.shadowRoot.innerHTML += `
                <my-search></my-search>
                `;

                this.shadowRoot.innerHTML += `
                <my-playing></my-playing>
                `;
                
                const publicationsSection = this.ownerDocument.createElement("section")
                publicationsSection.className = 'publications'
                this.publicationsList.forEach((user) => {
                    publicationsSection.appendChild(user);
                });
                this.shadowRoot?.appendChild(publicationsSection);

            }
        }
    }
    
customElements.define("app-container", AppContainer);