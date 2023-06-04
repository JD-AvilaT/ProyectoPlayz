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
            // this.shadowRoot.innerHTML = 
            // `
            //     <section>
            //         <div class="up">
            //             <img src="../src/imgs/avila.jpg">
            //             <input type="text" placeholder="What are you playing?">
            //         </div>
            //         <button>
            //             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            //             <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            //             <path d="M12 5l0 14"></path>
            //             <path d="M5 12l14 0"></path>
            //             </svg>
            //         </button>                                           
            //     </section>
            // `;

            const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement("section")

        const imgprofile = this.ownerDocument.createElement("img")
        // imgprofile.src = appState.user.img

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