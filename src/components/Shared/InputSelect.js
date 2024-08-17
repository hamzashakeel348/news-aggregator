import React from "react";

import { Select, InputLabel, FormControl } from "@mui/material";

const InputSelect = ({ label, value, onChange, children, name }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={value}
          onChange={onChange}
          name={name}
          renderValue={(selected) => selected.join(", ")}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputSelect;
