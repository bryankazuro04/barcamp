import "./card-list.js";

class DataContainer extends HTMLElement {
  set container(dataCard) {
    this._container = dataCard;
    this.render();
  }

  render() {
    this._container.forEach((cardData) => {
      const cardItem = document.createElement("card-list");
      cardItem.cards = cardData;
      this.appendChild(cardItem);
    });
  }
}

customElements.define("drink-data", DataContainer);
