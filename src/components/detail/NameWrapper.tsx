import { Box } from "@mui/material";
import { Pokemon } from "pokenode-ts";

interface NameWrapperProps {
  specificPokemon: Pokemon;
}

export const NameWrapper = ({ specificPokemon }: NameWrapperProps) => {
  return (
    <>
      <Box sx={{ fontWeight: "900", color: "lightgray", mt: 2 }}>
        No. {String(specificPokemon?.id).padStart(4, "0")}
      </Box>
      <Box sx={{ fontSize: "36px", fontWeight: "bold", color: "gray" }}>
        {specificPokemon?.name && specificPokemon?.name.charAt(0).toUpperCase() + specificPokemon?.name.slice(1)}
      </Box>
    </>
  );
};
