import "../components/container-drink.js";
import "../components/search-bar.js";
import CocktailData from "./data";

const main = () => {
  const containerData = document.querySelector("drink-data");

  const cocktailItem1 = () => {
    CocktailData.cocktailsA().then(renderCocktail).then(resMessage);
  };

  const cocktailItem2 = () => {
    CocktailData.cocktailsB().then(renderCocktail).then(resMessage);
  };

  const cocktailItem3 = () => {
    CocktailData.cocktailsZ().then(renderCocktail).then(resMessage);
  };

  const searchForm = document.querySelector("search-box");
  const test = async() => {
    try {
      const hasil = await CocktailData.cocktailSearch(searchForm.value);
      renderCocktail.innerHTML = "";
      renderCocktail(hasil);
    } catch (error) {
      resMessage(error);
    }
  };
  searchForm.search = test;

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
    cocktailItem1();
    cocktailItem2();
    cocktailItem3();
  });
};

export default main;
