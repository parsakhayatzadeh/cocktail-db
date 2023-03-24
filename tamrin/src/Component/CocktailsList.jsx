import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "./Context";
import Loader from "./Loader";

const CocktailsList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktail mached your search</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default CocktailsList;
