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
        m: 4,
        mb: 4,
        "& a": {
          mr: 1,
        },
      }}
    >
      Email: <a href="mailto:contact@example.com">yeonna18k@gmail.com</a> GitHub:
      <a href="https://github.com/yeonna18k" target="_blank">
        NaYeon Kang
      </a>
    </Box>
  );
};

export default Footer;
