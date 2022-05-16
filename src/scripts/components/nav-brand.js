class NavBrand extends HTMLElement {
  set brandNavbar(brand) {
    this._brandNavbar = brand;
    this.render();
  }

  render() {
    this.innerHTML = "Kazuro Barcamp";
  }
}

customElements.define("nav-brand", NavBrand);
