class Playing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML =
                `
            <link rel="stylesheet" href="./app/components/playing/playing.css">
                <section>
                    <div class="up">
                        <img src="../app/imgs/avila.jpg">
                        <input type="text" placeholder="What are you playing">
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                        </svg>
                    </button>                                           
                </section>
            `;
        }
    }
}
customElements.define("my-playing", Playing);
export default Playing;
