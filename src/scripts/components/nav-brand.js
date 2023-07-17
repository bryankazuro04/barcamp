class NavBrand extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set brandNavbar(brand) {
    this._brandNavbar = brand;
    this.render();
  }

  render() {
    this.innerHTML = "Kazuro Barcamp";
  }
}

customElements.define("nav-brand", NavBrand);
