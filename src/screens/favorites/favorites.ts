import "../../components/export"
import MyPublications, { Attribute1 } from "../../components/publicationcards/publicationcards";

import styles from "./favorites.css"


export default class Favorites extends HTMLElement {
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

                const publicationsSection = this.ownerDocument.createElement("section")
                publicationsSection.className = 'publications';
                
                // publication.forEach((publication:any)=>{
                //     const publicationCard = this.ownerDocument.createElement(
                //         "my-publication"
                //         ) as MyPublications;
                //         publicationCard.setAttribute(Attribute1.imgprofile, publication.imgprofile);
                //         publicationCard.setAttribute(Attribute1.name, publication.name);
                //         publicationCard.setAttribute(Attribute1.username, publication.username);
                //         publicationCard.setAttribute(Attribute1.description, publication.description);
                //         publicationCard.setAttribute(Attribute1.video, publication.video);

                 
                //     publicationsSection.appendChild(publicationCard);
                // })
                
                main.appendChild(publicationsSection)

                this.shadowRoot?.appendChild(main)

            }
        }
    }
    
customElements.define("my-favorites", Favorites);