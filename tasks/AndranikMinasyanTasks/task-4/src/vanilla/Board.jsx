
class Board {
  constructor(domElement) {
    this.element = domElement;
  }
  
  render() {
    this.element.innerHTML = `
      <div class="board">
        <h1>TODO: Render board here</h1>
      </div>
    `
  }
}



export default function bootstrap(domElement) {
  (new Board(domElement)).render();
}
