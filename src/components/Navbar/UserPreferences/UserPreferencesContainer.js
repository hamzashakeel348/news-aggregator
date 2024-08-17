import React, { useState } from "react";

import TuneIcon from "@mui/icons-material/Tune";

import UserPreferences from "./index";
import Modal from "../../Shared/Modal";

const UserPreferencesContainer = () => {
  const [isPreferencesVisible, setIsPreferencesVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePreferencesVisibility = () => {
    setIsPreferencesVisible(!isPreferencesVisible);
  };
  const iconColor = isHovered || isPreferencesVisible ? "black" : "gray";

  return (
    <div>
      <div
        onClick={togglePreferencesVisibility}
        style={{
          cursor: "pointer",
          color: iconColor,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TuneIcon />
      </div>

      {isPreferencesVisible && (
        <Modal onClose={() => togglePreferencesVisibility()}>
          <UserPreferences
            togglePreferencesVisibility={togglePreferencesVisibility}
          />{" "}
        </Modal>
      )}
    </div>
  );
};

export default UserPreferencesContainer;
