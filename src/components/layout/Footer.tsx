import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        fontSize: "12px",
        color: "lightslategray",
        cursor: "default",
        textAlign: "center",
        mt: 4,
      }}
    >
      https://pokeapi.co/docs/v2
    </Box>
  );
};

export default Footer;
