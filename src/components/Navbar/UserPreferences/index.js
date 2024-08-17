import React, { useContext } from "react";
import { debounce } from "lodash";

import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  ListItemText,
  Checkbox,
} from "@mui/material";

import { NewsContext } from "../../../contexts/NewsContext";
import CustomButton from "../../Shared/CustomButton";

import config from "../../../config/config";

const UserPreferences = ({ togglePreferencesVisibility }) => {
  const { preferences, setPreferences, resetAndFetchArticles } =
    useContext(NewsContext);

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;
    if (name === "sources" && !value.includes("BBC News")) {
      value.push("BBC News");
    }
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSavePreferences = debounce(() => {
    resetAndFetchArticles();
    togglePreferencesVisibility();
  }, 300);

  return (
    <div className="user-preferences mb-4 space-y-4">
      <FormControl fullWidth variant="outlined">
        <InputLabel>Select Preferred Sources</InputLabel>
        <Select
          label="Select Preferred Sources"
          multiple
          value={preferences.sources}
          onChange={handlePreferenceChange}
          name="sources"
          renderValue={(selected) => selected.join(", ")}
        >
          {config.sources.map((source) => (
            <MenuItem key={source.name} value={source.name}>
              <Checkbox checked={preferences.sources.includes(source.name)} />
              <ListItemText primary={source.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* "The category param is not currently supported on the /everything endpoint."*/}
      {/* So due to API limitation I commented this out.*/}

      {/* <TextField
        variant="outlined"
        fullWidth
        label="Preferred Categories"
        name="categories"
        value={preferences.categories}
        onChange={handlePreferenceChange}
        placeholder="Enter categories separated by commas"
      /> */}


      {/* The author param is not currently supported on the /everything endpoint.*/}
      {/* So due to API limitation I commented this out.*/}

      {/* <TextField
        variant="outlined"
        fullWidth
        label="Preferred Authors"
        name="authors"
        value={preferences.authors}
        onChange={handlePreferenceChange}
        placeholder="Enter authors separated by commas"
      /> */}

      <CustomButton
        onClick={handleSavePreferences}
        title={"Save Preferences"}
        hideIcon={true}
        width={100}
      />
    </div>
  );
};

export default UserPreferences;
