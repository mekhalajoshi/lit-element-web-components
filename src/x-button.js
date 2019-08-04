import { LitElement, html, css } from 'lit-element';

class XButton extends LitElement{

    static get properties() {
        return {
            name:{type:String}
        }
    }

    static get styles() {
        return css`
        button {
            color : Green;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
        }
        `;
    }

    constructor() {
        super();
        this.name = 'Default button'
    }
    handleClick() {
        alert("Button Clicked!")
    }

    render() {
        return html`
        <button @click=${this.handleClick}>${this.name}</button>
    `;
    }
} 
customElements.define('x-button', XButton);