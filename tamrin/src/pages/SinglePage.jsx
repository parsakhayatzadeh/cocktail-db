import React from "react";
import Loading from "../Component/Loader";
import { useParams, Link } from "react-router-dom";
import Loader from "../Component/Loader";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function fetchItem() {
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
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchItem();
  }, [id]);
  console.log(cocktail);

  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return <h2>no cocktail to show</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <Link to={"/"} className="btn btn-primary">
          bach home
        </Link>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name : </span>
              {name}
            </p>
            <p>
              <span className="drink-data">category : </span>
              {category}
            </p>
            <p>
              <span className="drink-data">info : </span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass : </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions : </span> {instructions}
            </p>
            <p>
              <span className="drink-data"> ingredients : </span>
              {ingredients.map((item , index) => {
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
