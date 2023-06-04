import { dispatch } from "../../store";
import { Navigate, Register } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase from "../../utils/firebase";
import styles from "./formreg.css"

const credentials = {
    userName: "",
    email: "",
    password: "",
    img: "",
}

export default class MyFormReg extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = '';

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const userName = this.ownerDocument.createElement("input")
        userName.placeholder = "Username"
        userName.type = "text"
        userName.addEventListener("change", (e:any)=>{
            credentials.userName = e.target.value
        })

        const email = this.ownerDocument.createElement("input")
        email.placeholder = "Email"
        email.type = "email"
        email.addEventListener("change", (e:any)=>{
            credentials.email = e.target.value
        })

        const password = this.ownerDocument.createElement("input")
        password.placeholder = "Password"
        password.type = "password"
        password.addEventListener("change", (e:any)=>{
            credentials.password = e.target.value
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Register"
        sendbtn.addEventListener("click", async ()=>{
            const user = await firebase.registerUser(credentials)
            console.log(user);
            if(user){
                dispatch(Navigate(Screens.LOGIN))
                sessionStorage.clear()
            }
        })

        this.shadowRoot?.appendChild(userName)
        this.shadowRoot?.appendChild(email)
        this.shadowRoot?.appendChild(password)
        this.shadowRoot?.appendChild(sendbtn)

        }
    }

}

customElements.define('form-register', MyFormReg)