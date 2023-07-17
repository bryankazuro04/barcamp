import "../components/container-drink.js";
import "../components/search-bar.js";
import CocktailData from "./data";

const main = () => {
  const containerData = document.querySelector("drink-data");
  const abjads = ["a", "b", "c", "d", "e"];

  const cocktailItem = () => {
    abjads.forEach((abjad) => {
      CocktailData.cocktails(abjad).then(renderCocktail).then(resMessage);
    });
  };

  const searchForm = document.querySelector("search-box");
  const searchCocktail = async () => {
    try {
      const hasil = await CocktailData.cocktailSearch(searchForm.value);
      renderCocktail.innerHTML = "";
      renderCocktail(hasil);
    } catch (error) {
      resMessage(error);
    }
  };
  searchForm.search = searchCocktail;

  searchForm.addEventListener("keyup", (e) => {
    const searchDrink = e.target.value.toLowerCase();
    let drinkList = document.querySelectorAll("card-list");

    drinkList.forEach((categoryDrink) => {
      const itemDrink = categoryDrink.textContent.toLocaleLowerCase();

      if (itemDrink.indexOf(searchDrink) != -1) {
        categoryDrink.setAttribute("style", "display: block");

        const drinkData = document.querySelector("drink-data");
        drinkData.classList.toggle("searching");
      } else {
        categoryDrink.setAttribute("style", "display: none");
      }
    });
  });

  const renderCocktail = (drinks) => {
    containerData.container = drinks;
  };

  const resMessage = (error) => {
    console.log(error);
  };

  document.addEventListener("DOMContentLoaded", () => {
    cocktailItem();
  });
};

export default main;
