import styles from "./infoinputs.css"

export enum attribute{
    "input_text"="input_text"
}

export default class MyInput extends HTMLElement{
    input_text?: string;

    static get observedAttributes(){
        const attrs: Record<attribute, null> = {
            input_text: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(
        propName:attribute,
        _:unknown,
        newValue:string,
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

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

        const input = this.ownerDocument.createElement('input');
        input.placeholder = `${this.input_text}`;

        this.shadowRoot?.appendChild(input)
        }
    }

}

customElements.define('my-input', MyInput)