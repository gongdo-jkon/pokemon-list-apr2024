import { Box } from "@mui/material";
import { Pokemon } from "pokenode-ts";
import { TYPES_COLORS } from "../../shared/data";

interface TypeWrapperPropsType {
  pokemon: Pokemon;
  width?: string;
}

export const TypeWrapper = ({ pokemon, width }: TypeWrapperPropsType) => {
  return (
    <Box className="types" sx={{ display: "flex", justifyContent: "center", mx: "auto", width: width ?? "100%" }}>
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
    </Box>
  );
};
