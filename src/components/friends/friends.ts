import { addObserver, appState, dispatch } from "../../store";
import { User } from "../../types/users";
import styles from "./friends.css"

class Friends extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML=""

            const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement("section")

        appState.friends.forEach((p)=>{
            
            const card = this.ownerDocument.createElement("section")
    
            const imgprofile = this.ownerDocument.createElement("img")
            imgprofile.src = p.img
    
            const username = this.ownerDocument.createElement("p")
            username.textContent = p.userName
    
            card.appendChild(imgprofile)
            card.appendChild(username)
    
            container.appendChild(card)
            })

        this.shadowRoot?.appendChild(container)
        
        }
    }


customElements.define("my-friends",Friends);
export default Friends;