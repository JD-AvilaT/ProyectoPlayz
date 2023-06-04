import { appState, dispatch } from "../../store";
import { User } from "../../types/users";
import styles from "./friends.css"

export enum Attribute2 {
    "id" = "id",
    "imgprofile" = "imgprofile",
    "username" = "username"
}

class Friends extends HTMLElement{

    uid?: string;
    imgprofile?: string;
    username?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute2, null> = {
            id: null,
            imgprofile: null,
            username: null
        };
        return Object.keys(attrs);
    }
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){

            const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement("section")

        const imgprofile = this.ownerDocument.createElement("img")
        imgprofile.src = appState.user.img

        const username = this.ownerDocument.createElement("p")
        username.textContent = appState.user.userName

            //delete action

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.addEventListener("click", async ()=>{
            dispatch(await AddPost(post))
        })

        container.appendChild(imgprofile)
        container.appendChild(username)
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)
        
        }
    }
}

customElements.define("my-friends",Friends);
export default Friends;