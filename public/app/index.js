import "./components/index.js";
import Publicationsdata from "./publicationdata.js";
import { Attribute1 } from "./components/publicationcard/publicationcard.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.publicationsList = [];
        this.attachShadow({ mode: "open" });
        Publicationsdata.forEach((user) => {
            const publicationCard = this.ownerDocument.createElement("my-publication");
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
        var _a;
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
            const publicationsSection = this.ownerDocument.createElement("section");
            publicationsSection.className = 'publications';
            this.publicationsList.forEach((user) => {
                publicationsSection.appendChild(user);
            });
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(publicationsSection);
        }
    }
}
customElements.define("app-container", AppContainer);
