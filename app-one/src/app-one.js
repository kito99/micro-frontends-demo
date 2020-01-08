var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from 'lit-element';
import 'emoji-slider';
let AppOne = class AppOne extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 0;
    }
    static get styles() {
        return css `
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
        return html `
<emoji-slider emoji="😸" value="${this.value}" @change="${this.valueChanged}"></emoji-slider>
<div class="value">${this.value}</div>`;
    }
    valueChanged(event) {
        this.value = event.detail.value;
    }
};
__decorate([
    property()
], AppOne.prototype, "value", void 0);
AppOne = __decorate([
    customElement('x-app-one')
], AppOne);
export { AppOne };
