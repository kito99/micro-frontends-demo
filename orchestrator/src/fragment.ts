import {customElement, html, LitElement, property} from 'lit-element';
import {Router} from "@vaadin/router/dist/vaadin-router";


@customElement('x-fragment')
export class App1 extends LitElement {

    @property()
    src: string;

    render() {
        return html`<h-import src="${this.src}"></h-import>`;
    }
}
