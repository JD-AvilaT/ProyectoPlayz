import styles from "./search.css"

class Search extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = 
            `
                <section>
                <div>
                    <input type="text" placeholder="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                    </svg>
                </div>
                </section>
            `;

            const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)
        }
    }
}

customElements.define("my-search",Search);
export default Search;