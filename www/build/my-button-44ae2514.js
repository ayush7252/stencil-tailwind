import { r as registerInstance, h } from './index-956bf58a.js';

const MyButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = 'Button';
    this.color = 'primary';
    this.size = 'medium';
    this.icon = '';
  }
  render() {
    const baseClasses = 'px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const colorClasses = {
      primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      secondary: 'bg-yellow-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    }[this.color] || 'bg-blue-600 text-white';
    const sizeClasses = {
      small: 'text-sm px-3 py-1',
      medium: 'text-base',
      large: 'text-lg px-6 py-3',
    }[this.size] || '';
    return (h("button", { class: `${baseClasses} ${colorClasses} ${sizeClasses}` }, this.icon && h("i", { class: `${this.icon} ${this.label ? 'mr-2' : ''}` }), this.label));
  }
};

export { MyButton as M };
