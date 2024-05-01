import { Box } from "@mui/material";
import { WrapperPropsType } from "../../shared/types";

export const TypeWrapper = ({ children, width }: WrapperPropsType) => {
  return (
    <Box className="types" sx={{ display: "flex", justifyContent: "center", mx: "auto", width: width ?? "100%" }}>
      {children}
    </Box>
  );
};
