import "../components/export"
import {getPublications} from "../services/publicationsApi"
import MyPublications, { Attribute1 } from "../components/publicationcard/publicationcard";
import styles from "./index.css"

class AppDashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        }

        async connectedCallback() {
            const publication = await getPublications()
            this.render(publication);
        }
        
        render(publication: any) {
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
                
                publication.forEach((publication:any)=>{
                    const publicationCard = this.ownerDocument.createElement(
                        "my-publication"
                        ) as MyPublications;
                        publicationCard.setAttribute(Attribute1.imgprofile, publication.imgprofile);
                        publicationCard.setAttribute(Attribute1.name, publication.name);
                        publicationCard.setAttribute(Attribute1.username, publication.username);
                        publicationCard.setAttribute(Attribute1.description, publication.description);
                        publicationCard.setAttribute(Attribute1.video, publication.video);

                    const publicationsSection = this.ownerDocument.createElement("section")
                    publicationsSection.className = 'publications'
                    publicationsSection.appendChild(publicationCard);
                    this.shadowRoot?.appendChild(publicationsSection);
                })

            }
        }
    }
    
customElements.define("app-dashboard", AppDashboard);