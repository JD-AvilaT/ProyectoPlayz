import "./components/index.js";
import Publicationsdata from "./publicationdata.js";
import { Attributes } from "./components/publicationcard/publicationcard.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.publications = [];
        this.attachShadow({ mode: "open" });
        Publicationsdata.forEach((user) => {
            const publicationCard = this.ownerDocument.createElement("my-publication");
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
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                `;
            const publicationsSection = this.ownerDocument.createElement("section");
            publicationsSection.className = 'publicationS';
            this.publications.forEach((user) => {
                publicationsSection.appendChild(user);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(publicationsSection);
        }
    }
}
customElements.define("app-container", AppContainer);
