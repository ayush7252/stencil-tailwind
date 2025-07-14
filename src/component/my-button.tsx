import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: false
})
export class MyButton {
  @Element() el!: HTMLElement;
  
  @Prop() label: string = 'Button';
  @Prop() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() icon: string = '';
  @Prop() a11yLabel: string = '';
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  private button: HTMLButtonElement | undefined;
  componentDidLoad() {
    if (!this.a11yLabel && !this.label) {
      console.warn('Button requires either a label or aria-label for accessibility');
    }
    if (this.icon && !this.label && !this.a11yLabel) {
      console.warn('Icon-only buttons require an aria-label for accessibility');
    }
  }

  render() {
    const baseClasses = [
      'px-4 py-2 rounded font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'flex items-center justify-center',
      'min-w-[100px]', 
      'transform hover:scale-105 active:scale-95', 
      'focus:ring-opacity-50',
      'motion-reduce:transform-none',
      'border-2 border-transparent',
      'focus:border-blue-400',
      'hover:shadow-md',
      'active:shadow-inner',
      'focus-visible:ring-2 focus-visible:ring-blue-800' 
    ].join(' ');
    
    const colorClasses = {
      primary: 'bg-red-400 text-white hover:bg-red-700 focus:ring-red-500',
      secondary: 'bg-yellow-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    }[this.color] || 'bg-blue-600 text-white';

    const sizeClasses = {
      small: 'text-sm px-3 py-2', 
      medium: 'text-base py-2',
      large: 'text-lg px-6 py-3',
    }[this.size] || '';

    return (
      <button
        class={`${baseClasses} ${colorClasses} ${sizeClasses}`}
        aria-label={this.a11yLabel || this.label}
        aria-disabled={this.disabled ? 'true' : undefined}
        disabled={this.disabled}
        type={this.type}
        ref={el => this.button = el}
      >
        {this.icon && <i 
          class={`${this.icon} ${this.label ? 'mr-2' : ''}`}
          aria-hidden="true"
        ></i>}
        {this.label}
      </button>
    );
  }
}