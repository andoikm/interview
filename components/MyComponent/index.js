class MyComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Import the template content
    const template = document.getElementById('my-component-template');
    debugger;
    const templateContent = template.content.cloneNode(true);

    // Append the template content to the shadow DOM
    this.shadowRoot.appendChild(templateContent);
  }

  connectedCallback() {
    console.log('My component has been added to the DOM!');
  }

  // You can add more methods or properties here as needed
}

// Define the custom element
customElements.define('my-component', MyComponent);
