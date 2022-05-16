import axios from "axios";

class CocktailData {
  static baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

  static getCocktails = (endPoint) => {
    return axios
      .get(this.baseURL + endPoint)
      .then((response) => response.data.drinks)
      .catch((error) => error);
  };

  static cocktailsA = () => this.getCocktails("/search.php?f=a");
  static cocktailsB = () => this.getCocktails("/search.php?f=b");
  static cocktailsZ = () => this.getCocktails("/search.php?f=z");
  static cocktailSearch = (keyword) =>
    this.getCocktails(`/search.php?s=${keyword}`);
}

export default CocktailData;
