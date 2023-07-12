import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({setSearch, search, onSortChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Sort onSortChange={onSortChange}/>
      <Search setSearch={setSearch} search={search} />
    </header>
  );
}

export default Header;
