import React, { useRef, useState } from "react";
import { useGlobalContext } from "./Context";

const SearchForm = () => {
  const { setSearchTem, searchTerm } = useGlobalContext();
  const searchVal = React.useRef("");

  const [search, setSearch] = useState("a");
  const enter = (e) => {
    const parsa = e.target.value;
    setSearch(parsa);
    setSearchTem(parsa);
  };

  React.useEffect(() => {
    searchVal.current.focus();
  });

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search for favorite cocktail</label>
          <input type="text" onChange={enter} ref={searchVal} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
