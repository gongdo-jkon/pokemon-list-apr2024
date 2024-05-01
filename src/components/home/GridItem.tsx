import { Box } from "@mui/material";
import { Pokemon } from "pokenode-ts";
import { useNavigate } from "react-router-dom";
import { TypeWrapper } from "../common/TypeWrapper";

interface GridItemProps {
  pokemon: Pokemon;
}

export const GridItem = ({ pokemon }: GridItemProps) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "20px",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(`/${pokemon.id}`);
      }}
    >
      <Box
        className="name"
        sx={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "lightslategray",
        }}
      >
        No. {String(pokemon.id).padStart(4, "0")}
      </Box>
      <Box className="name" sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Box>
      <img src={pokemon.sprites.front_default ?? undefined} alt={pokemon.name} />

      <TypeWrapper pokemon={pokemon} />
    </Box>
  );
};
