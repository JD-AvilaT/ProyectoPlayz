import "../components/export"
import Publications from "../services/publicationsApi"

import MyPublications, { Attribute1 } from "../components/publicationcard/publicationcard";

import styles from "./index.css"

class AppDashboard extends HTMLElement {
    publicationsList: MyPublications[] = [];

    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        Publications.for((user) => {
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
                const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

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
    
customElements.define("app-dashboard", AppDashboard);