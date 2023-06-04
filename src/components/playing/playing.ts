import { appState, dispatch } from "../../store";
import { AddPost } from "../../store/actions";
import { Post } from "../../types/post";
import styles from "./playing.css"

const post: Post = {
    id:"",
    imgprofile: "",
    username: "",
    description: "",
    video: "",
    createdAt: "",
}

class Playing extends HTMLElement{
    
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
        imgprofile.src = appState.userData.img

        const descriptionPost = this.ownerDocument.createElement("input")
        descriptionPost.placeholder = "What are you playing?"
        descriptionPost.type = "text"
        descriptionPost.addEventListener("change", (e:any)=>{
            post.description = e.target.value
        })

        const videoLink = this.ownerDocument.createElement("input")
        videoLink.placeholder = "Your embed youtube video here"
        videoLink.type = "text"
        videoLink.addEventListener("change", (e:any)=>{
            post.video = e.target.value
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.addEventListener("click", async ()=>{
            dispatch(await AddPost(post))
        })

        container.appendChild(imgprofile)
        container.appendChild(descriptionPost)
        container.appendChild(videoLink)
        container.appendChild(sendbtn)

        this.shadowRoot?.appendChild(container)
        
        }
    }
}

customElements.define("my-playing",Playing);
export default Playing;