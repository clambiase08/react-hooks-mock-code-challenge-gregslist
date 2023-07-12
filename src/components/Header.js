import React from "react";
import Search from "./Search";

function Header({setSearch, search, listings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} search={search} listings={listings}/>
    </header>
  );
}

export default Header;
