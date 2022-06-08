import { createContext, useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setCocktailName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${cocktailName}`);
      const result = await response.json();
      if (result.drinks) {
        setCocktails(result.drinks);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [cocktailName]);

  const handleChange = (e) => {
    setCocktailName(e.target.value);
  };

  const values = {
    cocktailName,
    handleChange,
    cocktails,
    isLoading,
    setIsLoading
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
