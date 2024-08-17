import React from "react";

import SearchBar from "./SearchBar";
import FilterContainer from "./Filter/FilterContainer";
import UserPreferencesContainer from "./UserPreferences/UserPreferencesContainer";

const Navbar = ({ onSearch, onFilterChange }) => {
  return (
    <div className="flex justify-around items-center  mb-4 ">
      <SearchBar onSearch={onSearch} />
      <FilterContainer onFilterChange={onFilterChange} />
      <UserPreferencesContainer />{" "}
    </div>
  );
};

export default Navbar;
