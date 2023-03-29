import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SinglePage = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  async function fetchItem() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.replace(
          ":",
          ""
        )}`
      );
      const data = await res.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          info,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  console.log(cocktail);
  useEffect(() => {
    fetchItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, info, image, category, instructions, ingredients, glass } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <Link to={"/"} className="btn btn-primary">
          Back Home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name : </span> {name}
            </p>
            <p>
              <span className="drink-data">categoey : </span> {category}
            </p>
            <p>
              <span className="drink-data">info : </span> {info}
            </p>
            <p>
              <span className="drink-data">glass : </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions : </span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients : </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SinglePage;
