import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        fontSize: "36px",
        fontWeight: "Bold",
        textAlign: "center",
      }}
    >
      <Box component="span" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Pokédex
      </Box>
    </Box>
  );
};

export default Header;
