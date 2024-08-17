import React, { useState } from "react";

import { debounce } from "lodash";

import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = debounce((inputValue) => {
    onSearch(inputValue);
  }, 300);

  return (
    <div className="search-bar w-4/5">
      <TextField
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search for articles..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
