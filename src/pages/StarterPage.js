import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Typography } from "@mui/material";

import { useTypingEffect } from "../utils/utils";
import CustomButton from "../components/Shared/CustomButton";

const StarterPage = () => {
  const navigate = useNavigate();

  const fullText = "Stay updated with the latest news!";
  const typedText = useTypingEffect(fullText, 50); // Adjust speed as needed

  const goToNewsPage = () => {
    navigate("/news");
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "left", marginTop: "100px" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the News Aggregator
      </Typography>
      <Typography variant="body1" paragraph gutterBottom>
        {typedText}{" "}
      </Typography>
      <CustomButton
        onClick={goToNewsPage}
        title={"Go to News!"}
        hideIcon={false}
      />
    </Container>
  );
};

export default StarterPage;
