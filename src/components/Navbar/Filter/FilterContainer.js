import React, { useState } from "react";

import FilterListIcon from "@mui/icons-material/FilterList";

import Filters from "./index";
import Modal from "../../Shared/Modal";

const FilterContainer = ({}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFiltersVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const iconColor = isHovered || isFilterVisible ? "black" : "gray";

  return (
    <div>
      <div
        onClick={toggleFiltersVisibility}
        style={{
          cursor: "pointer",
          color: iconColor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FilterListIcon />
      </div>

      {isFilterVisible && (
        <Modal onClose={() => toggleFiltersVisibility()}>
          <Filters toggleFiltersVisibility={toggleFiltersVisibility} />
        </Modal>
      )}
    </div>
  );
};

export default FilterContainer;
