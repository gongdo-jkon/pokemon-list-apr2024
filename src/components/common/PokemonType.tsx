import { Pokemon } from "pokenode-ts";
import { TYPES_COLORS } from "../../shared/data";
import { Box } from "@mui/material";

interface PokemonTypeProps {
  pokemon: Pokemon;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ pokemon }) => {
  return (
    <>
      {pokemon.types.map((type) => {
        const bgColor = TYPES_COLORS[type.type.name] || "gray";
        return (
          <Box
            key={type.type.name}
            sx={{
              py: 0.5,
              width: "100%",
              bgcolor: bgColor,
              borderRadius: 2,
              color: "white",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {type.type.name}
          </Box>
        );
      })}
    </>
  );
};

export default PokemonType;
