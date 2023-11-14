
class Demo {
  constructor(domElement) {
    this.element = domElement;
  }
  
  render() {
    this.element.innerHTML = `
      <div class="demo">
        <h1>TODO: Render player here</h1>
      </div>
    `
  }
}



export default function bootstrap(domElement) {
  (new Demo(domElement)).render();
}
