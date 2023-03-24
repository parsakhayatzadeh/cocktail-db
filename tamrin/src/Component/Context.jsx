import React, { useContext, useEffect, useState } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTem] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGalss } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            img: strDrinkThumb,
            glass: strGalss,
          };
        });
        setLoading(false);
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
        setLoading(false);
      }
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
        setSearchTem,
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
