export enum Attribute1 {
    "imgprofile" = "imgprofile",
    "name" = "name",
    "username" = "username",
    "description" = "description",
    "video" = "video",
}

class MyPublications extends HTMLElement {
    imgprofile?: string;
    name?: string;
    username?: string;
    description?: string;
    video?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
            imgprofile: null,
            name: null,
            username: null,
            description: null,
            video: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute1,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Publicationcard/Publicationcard.css">
                <section>
                    <section>
                        <img src="${this.imgprofile}">
                        <section>
                            <h4>${this.name}</h4>
                            <p>${this.username}</p>
                        </section>
                    </section>
                    <p>${this.description}</p>
                    <iframe src="${this.video}"></iframe>
                    <section>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 9h8"></path>
                        <path d="M8 13h6"></path>
                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                        </svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                        </svg>
                    </section>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-publication", MyPublications);
export default MyPublications;