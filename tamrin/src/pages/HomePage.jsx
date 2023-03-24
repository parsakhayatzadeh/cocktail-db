import React from "react";
import CocktailsList from "../Component/CocktailsList";
import SearchForm from "../Component/SearchForm";

const HomePage = () => {
  return (
    <main>
      <SearchForm />
      <CocktailsList />
    </main>
  );
};

export default HomePage;
