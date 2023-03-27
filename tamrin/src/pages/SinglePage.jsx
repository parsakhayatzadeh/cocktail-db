import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SinglePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [parsa, setParsa] = useState("pa");

  const fetchItem = async () => {
    try {
      const res = await fetch(`${url}${id.replace(":", "")}`);
      const data = await res.json();
      const { drinks } = data;
      console.log(drinks[0]);
      const {
        idDrink,
        strAlcoholic,
        strCategory,
        strDrink,
        strDrinkThumb,
        strGlass,
      } = drinks[0];
      const newItem = { id: idDrink, name: strDrink };
      setParsa(newItem)
      console.log(parsa);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCocktail([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchItem()
  }, []);

  return (
    <div>
      <p>{id}</p>
      <button onClick={fetchItem}>parsa</button>
    </div>
  );
};

export default SinglePage;
