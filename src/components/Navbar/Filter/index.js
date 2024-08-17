import React, { useContext } from "react";
import { debounce } from "lodash";
import {
  TextField,
} from "@mui/material";
import CustomButton from "../../Shared/CustomButton";
import { NewsContext } from "../../../contexts/NewsContext";

const Filters = ({ toggleFiltersVisibility }) => {
  const { filters, setFilters, resetAndFetchArticles, clearFilters } =
    useContext(NewsContext);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFilterChange = debounce(() => {
    resetAndFetchArticles({}, true);
    toggleFiltersVisibility();
  }, 300);

  const handleClearFilters = debounce(() => {
    clearFilters();
    toggleFiltersVisibility();
  }, 300);

  return (
    <div className="filters space-y-4">
      <TextField
        variant="outlined"
        fullWidth
        label="From Date"
        type="date"
        name="from"
        value={filters.from}
        onChange={handleFilterChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        variant="outlined"
        fullWidth
        label="To Date"
        type="date"
        name="to"
        value={filters.to}
        onChange={handleFilterChange}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* "The category param is not currently supported on the /everything endpoint."*/}
      {/* So due to API limitation I commented this out.*/}

      {/* <TextField
        variant="outlined"
        fullWidth
        label="Filter by category"
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
      /> */}

      {/* Due to API limitation I commented this out.*/}
      {/* <InputSelect
        name="source"
        value={filters.source}
        label="Filter by source"
        onChange={handleFilterChange}
        children={config.sources.map((source) => (
          <MenuItem key={source.name} value={source.name}>
            <Checkbox checked={filters.source.indexOf(source.name) > -1} />
            <ListItemText primary={source.name} />
          </MenuItem>
        ))}
      /> */}

      <CustomButton
        onClick={submitFilterChange}
        title={"Apply Filters"}
        hideIcon={true}
        width={100}
      />

      <p className="underline cursor-pointer" onClick={handleClearFilters}>
        Clear Filters
      </p>
    </div>
  );
};

export default Filters;
