import React from "react";

import { styled } from "@mui/system";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomisedButton = styled(Button)({
  backgroundColor: "#0b0c10", // Dark background matching the screenshot
  color: "#ffffff", // White text
  padding: "10px 20px",
  borderRadius: "50px", // Rounded corners
  textTransform: "none", // Disable uppercase transformation
  fontSize: "12px",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#1f2833", // Slightly lighter on hover
  },
});

const CustomButton = ({ onClick, hideIcon, title, width }) => {
  const endIcon = !hideIcon && <ArrowForwardIcon />;
  const customWidth = width ? `${width}%` : "45%";
  return (
    <CustomisedButton
      style={{ width: customWidth }} // Check if width is provided, otherwise default to 'auto'
      endIcon={endIcon}
      onClick={onClick}
    >
      {title}
    </CustomisedButton>
  );
};

export default CustomButton;
