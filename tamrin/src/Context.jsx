import React, { useContext, useEffect, useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      console.log(data);
      if (data.drinks) {
        const newCocktails = data.drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            info: strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
