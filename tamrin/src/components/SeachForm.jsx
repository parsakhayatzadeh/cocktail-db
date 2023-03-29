import React, { useState } from "react";
import { useGlobalContext } from "../Context";

const SeachForm = () => {
  const { setSearchTerm, searchTerm } = useGlobalContext();
  const searchVal = React.useRef("a");
  React.useEffect(() => {
    searchVal.current.focus();
  }, []);
  const ghangeVal = () => {
    setSearchTerm(searchVal.current.value);
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search section">
      <form className="search-form" onSubmit={HandleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>

          <input
            type="text"
            name="name"
            ref={searchVal}
            id="name"
            onChange={ghangeVal}
          />
        </div>
      </form>
    </section>
  );
};

export default SeachForm;
