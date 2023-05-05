import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
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
            this.shadowRoot.innerHTML = ``;
        
            const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)

            const container = this.ownerDocument.createElement("section")

            const logo = this.ownerDocument.createElement("img")
            logo.src = "../src/imgs/logo.png"
            logo.className = "logo"

            const sections = this.ownerDocument.createElement("div")
            sections.className = "locations"

            const home = this.ownerDocument.createElement("button")
            home.className = "home"
            home.innerText = "Home"
            home.addEventListener("click", ()=>{
                dispatch(navigate(Screens.DASHBOARD))
             })


            const games = this.ownerDocument.createElement("button")
            games.className = "games"
            games.innerText = "Games"

            const friends = this.ownerDocument.createElement("button")
            friends.className = "friends"
            friends.innerText = "Friends"

            const saved = this.ownerDocument.createElement("button")
            saved.className = "saved"
            saved.innerText = "Saved"

            sections.appendChild(home)
            sections.appendChild(games)
            sections.appendChild(friends)
            sections.appendChild(saved)

            const profile = this.ownerDocument.createElement("div")
            profile.className = "profile"

            const profilebtn = this.ownerDocument.createElement("button")
            profilebtn.className = "btnprofile"
            profilebtn.addEventListener("click", ()=>{
                dispatch(navigate(Screens.PROFILE))
             })

            const profileImg = this.ownerDocument.createElement("img")
            profileImg.src = "../src/imgs/avila.jpg"


            profilebtn.appendChild(profileImg)
            profile.appendChild(profilebtn)

            container.appendChild(logo)
            container.appendChild(sections)
            container.appendChild(profile)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-navbar",Navbar);
export default Navbar;