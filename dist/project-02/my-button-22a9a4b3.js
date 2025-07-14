import { r as registerInstance, h } from './index-5c9dc87a.js';

const myButtonCss = ":host{display:inline-block}button{padding:0.5rem 1rem;border:none;border-radius:4px;font-size:1rem;cursor:pointer;transition:all 0.2s ease;display:flex;align-items:center;gap:0.5rem}button i{font-size:1rem}.primary{background-color:#4f46e5;color:white}.primary:hover{background-color:#4338ca}.secondary{background-color:#6b7280;color:white}.secondary:hover{background-color:#525964}.small{padding:0.375rem 0.75rem;font-size:0.875rem}.medium{padding:0.5rem 1rem;font-size:1rem}.large{padding:0.75rem 1.5rem;font-size:1.125rem}button:focus{outline:none;box-shadow:0 0 0 2px rgba(79, 70, 229, 0.5)}";

const MyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = 'Button';
    this.color = 'primary';
    this.size = 'medium';
    this.icon = '';
  }
  render() {
    const buttonClass = `button ${this.color} ${this.size}`;
    return (h("button", { class: buttonClass }, this.icon ? h("i", { class: `fas ${this.icon}` }) : null, this.label));
  }
};
MyButton.style = myButtonCss;

export { MyButton as M };
