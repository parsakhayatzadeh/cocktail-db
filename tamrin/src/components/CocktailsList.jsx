import React from "react";
import { useGlobalContext } from "../Context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailsList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length == 0) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return <section className="section">
    <h2 className="section-title">Cocktails</h2>
    <div className="cocktails-center">
      {cocktails.map((item , index) =>{ 
        return ( 
          <Cocktail key={index} {...item}/>
        )
      })}
    </div>
  </section>
};

export default CocktailsList;
