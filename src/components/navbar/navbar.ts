import styles from "./navbar.css"

class Navbar extends HTMLElement{
    
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
                    <img class="logo" src="../app/imgs/logo.png">
                    <div class="locations">
                        <a class="home" href="">Home</a>
                        <a class="games" href="">Games</a>
                        <a class="friends" href="">Friends</a>
                        <a class="saved" href="">Saved</a>
                    </div>
                    <div class="profile">
                        <img src="../app/imgs/avila.jpg">
                    </div>
                    
                </section>
            `;
        
            const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)
        }
    }
}

customElements.define("my-navbar",Navbar);
export default Navbar;