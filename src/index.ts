import "./screens/dashboard"
import "./screens/register"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const dashboard = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(dashboard);


        //const register = this.ownerDocument.createElement('app-register');
        //this.shadowRoot?.appendChild(register);
    }
}

customElements.define('app-container', AppContainer)