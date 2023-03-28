import React from "react";
import CocktailsList from "../components/CocktailsList";
import SeachForm from "../components/SeachForm";
const HomePage = () => {
  return (
    <div>
      <SeachForm />
      <CocktailsList />
    </div>
  );
};

export default HomePage;
