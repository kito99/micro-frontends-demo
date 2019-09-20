import {css, customElement, html, LitElement, property} from 'lit-element';
import 'emoji-slider';

@customElement('x-app-one')
export class AppOne extends LitElement {

    @property()
    value = 0;

    static get styles() {
        return css`
             .value {
                margin-top: 20px;
                background: #007ad9;
                display: inline-block;
                padding: 2px 8px;
                color: white;
            }

    `;
    }

    render() {
        return html`
<emoji-slider emoji="😸" value="${this.value}" @change="${this.valueChanged}"></emoji-slider>
<div class="value">${this.value}</div>`;
    }

    valueChanged(event: CustomEvent) {
        this.value = event.detail.value;
    }
}
