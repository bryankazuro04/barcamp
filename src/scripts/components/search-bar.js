class SearchBox extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set search(key) {
    this._search = key;
    this.render();
  }

  get value() {
    return this.querySelector("#cocktailSearching").value;
  }

  render() {
    this.innerHTML = `
      <input type="search" id="cocktailSearching" placeholder="Search Cocktail" />
      <button type="submit" id="cocktailButtonSearch">Search</button>
    `;

    this.querySelector("#cocktailButtonSearch").addEventListener(
      "click",
      this._search
    );
  }
}

customElements.define("search-box", SearchBox);
