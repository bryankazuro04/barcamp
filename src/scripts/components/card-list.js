class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.innerHTML = `
      <img src="${this._cards.strDrinkThumb}" alt="${this._cards.strDrink}" loading="lazy">

      <div class="d-fl fai-c fjc-sb detail">
        <h3>${this._cards.strDrink}</h3>

        <button type="button" class="buttonDetail" data-bs-toggle="modal" data-bs-target="#modalCanvas${this._cards.idDrink}">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div> 

      <div class="modal fade" id="modalCanvas${this._cards.idDrink}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content d-fl">
            <div class="modal-head d-fl p1">
              <h5 class="modal-title" id="ModalLabel">${this._cards.strDrink}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div class="modal-detail p1 d-fl">
              <img id="image-modal" src="${this._cards.strDrinkThumb}" alt="${this._cards.strDrink}" />

              <div class="detail-container">  
                <p class="category-detail">
                  <b>Category :</b><br /> ${this._cards.strCategory}
                </p>
        
                <p class="description">
                  <b>Description :</b><br /> ${this._cards.strInstructions}
                </p>

                <div class="ingredient">
                  <b>Ingredients :</b>
                    <ul>
                      <li>${this._cards.strIngredient1}</li>
                      <li>${this._cards.strIngredient2}</li>
                      <li>${this._cards.strIngredient3}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("card-list", CardList);
