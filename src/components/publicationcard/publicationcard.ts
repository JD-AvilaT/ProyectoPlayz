
import { addObserver, appState, dispatch } from "../../store";
import { AddFavorite, AddFriend, GetPosts } from "../../store/actions";
import { Post } from "../../types/post";
import { User } from "../../types/users";
import styles from "./publicationcard.css"

const dataPost: Post = {
    id: "",
    imgprofile: "",
    username: "",
    description: "",
    video: "",
    createdAt: "",
}

const dataFriend: User={
        uid: "",
      userName: "",
      email: "",
      password: "",
      img: "",
}

class PublicationsCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this)
    }
    
    async connectedCallback() {
        if(appState.posts.length ===0){
        dispatch(await GetPosts())
        this.render();
    }else{
        this.render()
    }
    }
       
        render() {
            if(this.shadowRoot) this.shadowRoot.innerHTML=""
            const container = this.ownerDocument.createElement('section');

            appState.posts.forEach((p:any)=>{
                const all = this.ownerDocument.createElement("section");
                all.className = 'all';

                const profile = this.ownerDocument.createElement("section");
                all.className = 'profile';
                all.appendChild(profile);

                const imgProfile = this.ownerDocument.createElement("img");
                imgProfile.src = appState.userData.img;
                profile.appendChild(imgProfile);
                dataPost.imgprofile = p.imgprofile
                dataFriend.img = p.imgprofile

                const userName = this.ownerDocument.createElement("h3");
                userName.textContent = appState.userData.userName;
                profile.appendChild(userName);
                dataPost.username = p.username
                dataPost.id = p.id
                dataPost.createdAt = p.createdAt
                dataFriend.userName = p.username

                const follow = this.ownerDocument.createElement("button");
                follow.innerText = "Add Friend"
                follow.addEventListener("click",async()=>{
                    dispatch(await AddFriend(dataFriend))
                })
                profile.appendChild(follow)

                
                const description = this.ownerDocument.createElement("p");
                description.textContent = p.description;
                all.appendChild(description);
                dataPost.description = p.description

                const video = this.ownerDocument.createElement("iframe");
                video.src = p.video;
                all.appendChild(video);
                dataPost.video = p.video
                
                const likeAppart = this.ownerDocument.createElement("section");
                likeAppart.className = "likeAppart";
                all.appendChild(likeAppart);
                
                const like = this.ownerDocument.createElement("button");
                like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                </svg>`;
                likeAppart.appendChild(like);
                
                const save = this.ownerDocument.createElement("button");
                save.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>`;
                save.addEventListener("click",async()=>{
                    dispatch(await AddFavorite(dataPost))
                })
                likeAppart.appendChild(save);

                container.appendChild(all)
            })
            const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)

            this.shadowRoot?.appendChild(container)
        }
    }
    
customElements.define("my-publications", PublicationsCards);
export default PublicationsCards;