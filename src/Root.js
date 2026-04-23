.header{
  background-color: blue;
}

class Root extends HTMLElement{
  constructor(){
    super();

    this.innerHTML = `
      <div class="header">
        Initial header class
      </div>
    `;
  }
}
customElements.define('root', Root);
