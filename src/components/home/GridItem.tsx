import { Box } from "@mui/material";
import { WrapperPropsType } from "../../shared/types";

export const GridItem = ({ children, onClick }: WrapperPropsType) => {
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
      onClick={onClick}
    >
      {children}
    </Box>
  );
};
