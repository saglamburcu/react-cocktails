import { createContext, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`${url}${cocktailName}`);
      const result = await response.json();
      setCocktails(result.drinks.sort((a, b) => (a.strDrink < b.strDrink ? -1 : 1)));
      setFilteredData(result.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [cocktailName]);

  const handleChange = (e) => {
    setCocktailName(e.target.value);
  };

  useEffect(() => {

    const newFilter = cocktails.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(cocktailName.toLowerCase());
    });

    if (cocktailName === "") {
      setFilteredData(cocktails);
    } else {
      setFilteredData(newFilter);
    };
  }, [cocktailName])

  const values = {
    cocktailName,
    handleChange,
    filteredData
  }

  return (
    <CocktailContext.Provider value={values}>
      {children}
    </CocktailContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CocktailContext);
};
